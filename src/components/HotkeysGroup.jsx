import Hotkey from "./Hotkey";
import "../styles/HotkeysGroup.css";

export default function HotkeysGroup({ hotkeys = [] }) {
  return (
    <div className="hotkeys-group">
      {hotkeys.map((hotkey, i) => (
        <Hotkey key={i} letter={hotkey.letter} label={hotkey.label} />
      ))}
    </div>
  );
}

