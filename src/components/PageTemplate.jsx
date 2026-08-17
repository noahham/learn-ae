import "../styles/PageTemplate.css";
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import LottiePlayer from "./LottiePlayer";
import smallDownload from "../assets/animations/small-download.json";
import rightArrow from "../assets/animations/right-arrow.json";
import bigDownload from "../assets/animations/big-download.json";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import demos from "../assets/demos";

// Turns `word` into <code>word</code> and *word* into <em>word</em> within a paragraph string
function renderWithCode(text) {
  return text.split(/(`[^`]+`|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

// blocks: array of { type: "paragraph", text } | { type: "image", src, alt } | { type: "header", text }
// download: { label, sizeLabel, href }
// nextPage: { slug, heading, label } -> links to /{slug}
export default function PageTemplate({ title, blocks, download, nextPage, accent, animation }) {
  const location = useLocation();

  const handleDownload = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    // derive slug from current location (strip leading slash)
    const slug = (location.pathname || "").replace(/^\//, "") || "getting-started";

    // Helper to trigger download of a URL with a suggested filename
    const triggerDownload = (url, filename) => {
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
    };

    if (slug === "getting-started") {
      // Zip all demos as demos.zip using JSZip (dynamic import to keep bundle small)
      try {
        const JSZip = (await import("jszip")).default;
        const zip = new JSZip();

        const entries = Object.entries(demos);
        for (const [name, url] of entries) {
          try {
            const res = await fetch(url);
            if (!res.ok) continue;
            const blob = await res.blob();
            zip.file(`${name}.aep`, blob);
          } catch (err) {
            // skip individual failures
          }
        }

        const content = await zip.generateAsync({ type: "blob" });
        const objUrl = URL.createObjectURL(content);
        triggerDownload(objUrl, "demos.zip");
        // cleanup
        setTimeout(() => URL.revokeObjectURL(objUrl), 10000);
      } catch (err) {
        // fallback to original href if zip fails
        window.location.href = download.href;
      }
    } else {
      // try to download the single page demo .aep from demos mapping
      const demoUrl = demos[slug];
      if (demoUrl) {
        triggerDownload(demoUrl, `${slug}.aep`);
      } else {
        // fallback to original href if demo not found
        window.location.href = download.href;
      }
    }
  };

  const navigate = useNavigate();
  const cardNextHolderRef = useRef(null);
  const cardNextRef = useRef(null);
  const cardEyebrowRef = useRef(null);
  const cardHeadingRef = useRef(null);
  const componentRefs = useRef([]);
  const contentRef = useRef(null);

  useEffect(() => {
    const calculateOffset = () => {
      if (!cardNextHolderRef.current || !cardNextRef.current) return;
      const cardNextHeight = cardNextRef.current.offsetHeight;
      const cardNextHolderHeight = cardNextHolderRef.current.offsetHeight;
      const offset = cardNextHeight - 16 - cardNextHolderHeight;
      cardNextHolderRef.current.style.setProperty("--card-next-offset", `${offset}px`);
    };

    const calculateMarginOffsets = () => {
      if (!cardNextRef.current || !cardEyebrowRef.current || !cardHeadingRef.current) return;
      const cardNextWidth = cardNextRef.current.offsetWidth;
      const eyebrowWidth = cardEyebrowRef.current.offsetWidth;
      const headingWidth = cardHeadingRef.current.offsetWidth;
      cardEyebrowRef.current.style.setProperty("--card-span-margin", `${cardNextWidth - eyebrowWidth - 54}px`);
      cardHeadingRef.current.style.setProperty("--card-span-margin", `${cardNextWidth - headingWidth - 54}px`);
    };

    const calculateComponentScale = () => {
      componentRefs.current.forEach((wrapper) => {
        if (!wrapper) return;
        const inner = wrapper.firstElementChild;
        if (!inner) return;

        // Reset first so we measure the component's natural, unscaled size
        inner.style.transform = "none";
        const naturalWidth = inner.scrollWidth;
        const naturalHeight = inner.scrollHeight;
        const availableWidth = wrapper.clientWidth;

        if (naturalWidth > availableWidth && availableWidth > 0) {
          const scale = availableWidth / naturalWidth;
          inner.style.transform = `scale(${scale})`;
          wrapper.style.height = `${naturalHeight * scale}px`;
        } else {
          wrapper.style.height = "auto";
        }
      });
    };

    calculateOffset();
    calculateMarginOffsets();
    calculateComponentScale();

    const handleResize = () => {
      calculateOffset();
      calculateMarginOffsets();
      calculateComponentScale();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [blocks]); // recalc if content changes (different page)

  useEffect(() => {
    const targets = [
      ...(contentRef.current ? contentRef.current.querySelectorAll(".block-fade-in") : []),
    ];

    if (targets.length === 0) return;

    // If the browser doesn't support IntersectionObserver, just show everything.
    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [blocks]); // re-observe fresh nodes when content changes (different page)

  return (
    <div className="page" style={accent ? { "--accent": accent } : undefined}>
      <div className="top-fade" />
      <Navbar />

      <main className="main">
        <section className="hero">
          {animation ? (
            <LottiePlayer animationData={animation} loop className="opening-graphic fade-in" />
          ) : (
            <div className="placeholder opening-graphic fade-in" />
          )}
          <h1 className="title">{title}</h1>
          <div className="buttons">
            <button className="btn btn-primary" onClick={handleDownload}>
              <span>Demo</span>
              <LottiePlayer animationData={smallDownload} playOnHover={true} hoverParent={true} className="lottie lottie-24 swap-color" />
            </button>
            <button className="btn btn-outline" type="button" onClick={() => navigate(`/${nextPage.slug}`)}>
              <span>{nextPage.label}</span>
              <LottiePlayer animationData={rightArrow} playOnHover={true} hoverParent={true} className="lottie lottie-24" />
            </button>
          </div>
        </section>

        <section className="content" ref={contentRef}>
          {blocks.map((block, i) => {
            if (block.type === "paragraph") {
              return (
                <p key={i} className="paragraph block-fade-in">
                  {renderWithCode(block.text)}
                </p>
              );
            }
            if (block.type === "image") {
              return (
                <div key={i} className="image-wrap block-fade-in">
                  {block.src ? (
                    <img src={block.src} alt={block.alt || ""} className="image image-real" />
                  ) : (
                    <div className="placeholder image" />
                  )}
                </div>
              );
            }
            if (block.type === "animation") {
              return (
                  <div key={i} className="image-wrap block-fade-in">
                    {block.src ? (
                        <LottiePlayer animationData={block.src} loop className="image image-real" />
                    ) : (
                        <div className="placeholder image" />
                    )}
                  </div>
              );
            }
            if (block.type === "header") {
              return (
                <div key={i} className="section-header block-fade-in">
                  <h2>{block.text}</h2>
                </div>
              );
            }
            if (block.type === "component") {
              return (
                <div
                  key={i}
                  className="block-component block-fade-in"
                  ref={(el) => (componentRefs.current[i] = el)}
                >
                  <div className="block-component-inner">{block.node}</div>
                </div>
              );
            }
            return null;
          })}

          <div className="cards block-fade-in">
            <a
              className="card card-download"
              href={download.href}
              onClick={handleDownload}
            >
              <LottiePlayer animationData={bigDownload} playOnHover={true} hoverParent={true} className="lottie lottie-70x76" />
              <div className="card-download-text">
                <span className="card-title">{download.label}</span>
                <span className="card-subtitle">{download.sizeLabel}</span>
              </div>
            </a>

            <Link to={`/${nextPage.slug}`} className="card card-next" ref={cardNextRef}>
              <div className="card-next-holder" ref={cardNextHolderRef}>
                <span className="card-eyebrow" ref={cardEyebrowRef}>Continue To</span>
                <span className="card-heading" ref={cardHeadingRef}>{nextPage.heading}</span>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
