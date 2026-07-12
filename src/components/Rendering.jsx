import "./PageTemplate.css";
import {
  IconArrowBarToDown,
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

// Same shape as PageTemplate, minus `nextPage` — this is the last page in the
// flow, so there's no "Continue To" card and the hero has just one button.
// blocks: array of { type: "paragraph", text } | { type: "image", src, alt } | { type: "header", text }
// download: { label, sizeLabel, href }
export default function Rendering({ title, blocks, download, accent }) {
  return (
    <div className="page" style={accent ? { "--accent": accent } : undefined}>
      <div className="top-fade" />
      <Navbar />

      <main className="main">
        <section className="hero">
          <div className="placeholder opening-graphic" />
          <h1 className="title">{title}</h1>
          <div className="buttons">
            <button className="btn btn-primary">
              <span>Demo</span>
              <IconArrowBarToDown size={24} stroke={1.5} color="black" />
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

          <div className="cards cards-single">
            <a className="card card-download" href={download.href} download>
              <IconDownload width={70} height={76} stroke={1.25} color="white" preserveAspectRatio="none" />
              <div className="card-download-text">
                <span className="card-title">{download.label}</span>
                <span className="card-subtitle">{download.sizeLabel}</span>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
