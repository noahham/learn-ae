import "../styles/TripleImage.css";

// Renders three images side-by-side. Pass an `images` array prop with up to three
// imported image modules (e.g. import a from "../assets/..." and pass as images={[a,b,c]}).
// Images will cover each rect without stretching (object-fit: cover).
export default function TripleImage({ images = [], alts = [] }) {
  const slots = [0, 1, 2];
  return (
    <div className="triple-image">
      {slots.map((i) => (
        <div key={i} className="triple-image-rect">
          {images[i] ? (
            <img
              src={images[i]}
              alt={alts[i] || ""}
              className="triple-image-img"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}
