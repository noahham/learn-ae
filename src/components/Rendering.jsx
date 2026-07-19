import "../styles/PageTemplate.css";
import LottiePlayer from "./LottiePlayer";
import rightArrow from "../assets/animations/right-arrow.json";
import Navbar from "./Navbar";
import {useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";

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

// Same shape as PageTemplate, minus `nextPage` — this is the last page in the
// flow, so there's no "Continue To" card and the hero has just one button.
// blocks: array of { type: "paragraph", text } | { type: "image", src, alt } | { type: "header", text }
// download: { label, sizeLabel, href }
export default function Rendering({ title, blocks, accent, animation }) {
  const navigate = useNavigate();
  const cardNextHolderRef = useRef(null);
  const cardNextRef = useRef(null);

  useEffect(() => {
    const calculateOffset = () => {
      if (!cardNextHolderRef.current || !cardNextRef.current) return;
      const cardNextHeight = cardNextRef.current.offsetHeight;
      const cardNextHolderHeight = cardNextHolderRef.current.offsetHeight;
      const offset = cardNextHeight - 16 - cardNextHolderHeight;
      cardNextHolderRef.current.style.setProperty("--card-next-offset", `${offset}px`);
    };

    // Use requestAnimationFrame to ensure DOM is painted before measuring offsetHeight
    requestAnimationFrame(() => calculateOffset());

    const handleResize = () => {
      calculateOffset();
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
            <button className="btn btn-outline" type="button" onClick={() => navigate(`/getting-started`)}>
              <span>Restart</span>
              <LottiePlayer animationData={rightArrow} playOnHover={true} hoverParent={true} className="lottie lottie-24" />
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
            if (block.type === "component") {
              return (
                <div key={i} className="block-component">
                  {block.node}
                </div>
              );
            }
            return null;
          })}

          <div className="cards cards-single">
            <div className="card render-card"  ref={cardNextRef}>
              <div className="card-next-holder" ref={cardNextHolderRef}>
                <span className="card-eyebrow">Thank you so much,</span>
                <span className="card-heading">YOU'RE ALL DONE</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
