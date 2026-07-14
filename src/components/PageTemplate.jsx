import "./PageTemplate.css";
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import LottiePlayer from "./LottiePlayer";
import {
  IconArrowBarToDown,
  IconArrowNarrowRight,
  IconDownload,
} from "@tabler/icons-react";
import Navbar from "./Navbar";

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
  const navigate = useNavigate();
  const cardNextHolderRef = useRef(null);
  const cardNextRef = useRef(null);
  const cardEyebrowRef = useRef(null);
  const cardHeadingRef = useRef(null);

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

    calculateOffset();
    calculateMarginOffsets();

    const handleResize = () => {
      calculateOffset();
      calculateMarginOffsets();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [blocks]); // recalc if content changes (different page)

  return (
    <div className="page" style={accent ? { "--accent": accent } : undefined}>
      <div className="top-fade" />
      <Navbar />

      <main className="main">
        <section className="hero">
          {animation ? (
            <LottiePlayer animationData={animation} loop className="opening-graphic" />
          ) : (
            <div className="placeholder opening-graphic" />
          )}
          <h1 className="title">{title}</h1>
          <div className="buttons">
            <button className="btn btn-primary">
              <span>Demo</span>
              <IconArrowBarToDown size={24} stroke={1.5} color="black" />
            </button>
            <button className="btn btn-outline" type="button" onClick={() => navigate(`/${nextPage.slug}`)}>
              <span>{nextPage.label}</span>
              <IconArrowNarrowRight size={24} stroke={1.5} color="white" />
            </button>
          </div>
        </section>

        <section className="content">
          {blocks.map((block, i) => {
            if (block.type === "paragraph") {
              return <p key={i} className="paragraph">{renderWithCode(block.text)}</p>;
            }
            if (block.type === "image") {
              return (
                <div key={i} className="image-wrap">
                  {block.src ? (
                    <img src={block.src} alt={block.alt || ""} className="image image-real" />
                  ) : (
                    <div className="placeholder image" />
                  )}
                </div>
              );
            }
            if (block.type === "header") {
              return (
                <div key={i} className="section-header">
                  <h2>{block.text}</h2>
                </div>
              );
            }
            return null;
          })}

          <div className="cards">
            <a className="card card-download" href={download.href} download>
              <IconDownload width={70} height={76} stroke={1.25} color="white" preserveAspectRatio="none" />
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
