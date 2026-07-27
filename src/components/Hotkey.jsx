import "../styles/Hotkey.css";

export default function Hotkey({ letter = "H", label = "Hotkey" }) {
    return (
        <div className="hotkey">
            <div className="hotkey-key">
                <span className="hotkey-key-label">{letter}</span>
            </div>
            <div className="hotkey-name">{label}</div>
        </div>
    );
}