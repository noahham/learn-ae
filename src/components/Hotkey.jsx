import "../styles/Hotkey.css";
import {IconPlus} from '@tabler/icons-react';

const MODIFIER_KEYS = {
    CMD: { mac: "⌘", other: "CTRL" },
    OPT: { mac: "⌥", other: "ALT" },
};

function isMac() {
    if (typeof navigator === "undefined") return false;
    return /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
}

function resolveKey(key, mac) {
    const modifier = MODIFIER_KEYS[key];
    return modifier ? (mac ? modifier.mac : modifier.other) : key;
}

export default function Hotkey({ letter = "H", label = "Hotkey" }) {
    const mac = isMac();
    const keys = Array.isArray(letter) ? letter : [letter];

    return (
        <div className="hotkey">
            <div className="hotkey-keys">
                {keys.map((key, i) => {
                    const displayKey = resolveKey(key, mac);
                    return (
                        <div className="hotkey-key-group" key={i}>
                            <div className="hotkey-key">
                                <span className={`hotkey-key-label`}>
                                    {displayKey}
                                </span>
                            </div>
                            {i < keys.length - 1 && <IconPlus stroke={2} color={"#fff"} height={20} />}
                        </div>
                    );
                })}
            </div>
            <div className="hotkey-name">{label}</div>
        </div>
    );
}