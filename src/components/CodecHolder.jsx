import "../styles/CodecHolder.css";

export default function Codec({ title, subtext, extensions, description }) {
    return (
        <div className="codec">
            <div className="codec-info">
                <div className="codec-title">{title}</div>
                <div className="codec-subtext">{subtext}</div>
            </div>
            <div className="codec-extensions">
                {extensions.map((extension) => (
                    <div className="codec-extension" key={extension}>{extension}</div>
                ))}
            </div>
            <div className="codec-description">{description}</div>
        </div>
    );
}
