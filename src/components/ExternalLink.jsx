import "../styles/ExternalLink.css";

export default function ExternalLink({ title, subtext, icon, href }) {
    return (
        <a
            className="external-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img className="external-link-icon" src={icon} alt="" />
            <div className="external-link-text">
                <div className="external-link-title">{title}</div>
                <div className="external-link-subtext">{subtext}</div>
            </div>
        </a>
    );
}
