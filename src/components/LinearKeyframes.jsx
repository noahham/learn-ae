import "../styles/LinearKeyframes.css";
import Keyframe from "../assets/vectors/keyframe-linear.svg?react";
import Playhead from "../assets/vectors/supa-short-playhead.svg?react";
import React, { useEffect, useRef } from "react";

export default function LinearKeyframes() {
    const timelineRowRef = useRef(null);

    useEffect(() => {
        if (!timelineRowRef.current) return;

        // Use requestAnimationFrame to ensure the DOM is fully laid out before measuring
        const frameId = requestAnimationFrame(() => {
            // Find all ticks in the timeline row
            const ticks = timelineRowRef.current?.querySelectorAll(".linear-tick");
            if (!ticks || ticks.length < 2) return;

            // Get positions of first two ticks to calculate distance between them
            const firstTickRect = ticks[0].getBoundingClientRect();
            const secondTickRect = ticks[1].getBoundingClientRect();
            const tickDistance = secondTickRect.left - firstTickRect.left;

            // Only generate animation if tick distance is valid (not 0 or negative)
            if (tickDistance <= 0) {
                console.warn("Invalid tick distance calculated:", tickDistance);
                return;
            }

            // Generate keyframe animation with distances incremented every 10%
            const keyframes = [];
            for (let i = 0; i <= 10; i++) {
                const percentage = i * 100 / 11;
                let translateValue;

                if (i === 10) {
                    translateValue = 10 * tickDistance + 32;
                } else if (i === 0) {
                    translateValue = 0;
                } else {
                    translateValue = i * tickDistance + 16;
                }

                keyframes.push(`${percentage}% {transform: translateX(${translateValue}px)}`);
            }

            const animationCSS = `
                @keyframes linearPlayheadScroll {
                    ${keyframes.join('\n                    ')}
                }
            `;

            // Create and inject style tag
            const styleId = "linearPlayheadScrollDynamic";
            let styleTag = document.getElementById(styleId);
            if (!styleTag) {
                styleTag = document.createElement("style");
                styleTag.id = styleId;
                document.head.appendChild(styleTag);
            }
            styleTag.textContent = animationCSS;
        });

        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <div className="linear-keyframes-card">
            <div className="linear-viewfinder">
                <div className="linear-dashed-line" />
                <div className="linear-red-circle" />
            </div>

            <div className="linear-timeline">
                <div className="linear-timeline-track" />

                <div className="linear-timeline-row" ref={timelineRowRef}>
                    <Keyframe className="linear-keyframe" />
                    <div className="linear-tick" />
                    <div className="linear-tick" />
                    <div className="linear-tick" />
                    <div className="linear-tick" />
                    <div className="linear-tick" />
                    <div className="linear-tick" />
                    <div className="linear-tick" />
                    <div className="linear-tick" />
                    <div className="linear-tick" />
                    <Keyframe className="linear-keyframe" />
                    <Playhead className="linear-playhead" />
                </div>
            </div>
        </div>
    );
}
