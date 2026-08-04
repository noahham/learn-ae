import "../styles/EasingKeyframes.css";
import Keyframe from "../assets/vectors/keyframe-eased.svg?react";
import Playhead from "../assets/vectors/supa-short-playhead.svg?react";
import React, { useEffect, useRef } from "react";

export default function easingKeyframes() {
    const timelineRowRef = useRef(null);
    const redCircleRef = useRef(null);
    const [animationProgress, setAnimationProgress] = React.useState({ percentage: 0, px: 0 });

    // Red circle keyframe values (from CSS easingCircleAnimate)
    const circleKeyframes = [
        { time: 0, px: 0 },
        { time: 0.09, px: 4 },
        { time: 0.18, px: 18 },
        { time: 0.27, px: 48 },
        { time: 0.36, px: 103 },
        { time: 0.45, px: 189 },
        { time: 0.55, px: 276 },
        { time: 0.64, px: 332 },
        { time: 0.73, px: 362 },
        { time: 0.82, px: 376 },
        { time: 0.91, px: 380 },
    ];

    useEffect(() => {
        if (!timelineRowRef.current) return;

        // Use requestAnimationFrame to ensure the DOM is fully laid out before measuring
        const frameId = requestAnimationFrame(() => {
            // Find all ticks in the timeline row
            const ticks = timelineRowRef.current?.querySelectorAll(".easing-tick");
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
                @keyframes easingPlayheadScroll {
                    ${keyframes.join('\n                    ')}
                }
            `;

            // Create and inject style tag
            const styleId = "easingPlayheadScrollDynamic";
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

    // Track animation progress and update progress cards
    useEffect(() => {
        const animationDuration = 3.5; // seconds
        let animationStartTime = Date.now();

        const updateProgress = () => {
            if (!redCircleRef.current) return;

            const currentTime = (Date.now() - animationStartTime) / 1000;
            const normalizedTime = ((currentTime % animationDuration) / animationDuration);

            // Find which keyframe we're currently on
            let currentKeyframeIndex = 0;
            for (let i = 0; i < circleKeyframes.length; i++) {
                if (normalizedTime >= circleKeyframes[i].time) {
                    currentKeyframeIndex = i;
                }
            }

            // Percentage is based on which keyframe (0-10 keyframes = 0%-100%)
            const percentageComplete = (currentKeyframeIndex / (circleKeyframes.length - 1)) * 100;

            // Calculate px difference from previous keyframe
            let pxDifference = 0;
            if (currentKeyframeIndex > 0) {
                pxDifference = circleKeyframes[currentKeyframeIndex].px - circleKeyframes[currentKeyframeIndex - 1].px;
            }

            setAnimationProgress({ percentage: Math.round(percentageComplete), px: pxDifference });
        };

        const interval = setInterval(updateProgress, 50); // Update every 50ms

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="easing-keyframes-card">
            <div className="easing-viewfinder">
                <div className="easing-dashed-line" />
                <div className="easing-red-circle" ref={redCircleRef} />
            </div>

            <div className="easing-timeline">
                <div className="easing-timeline-track" />

                <div className="easing-timeline-row" ref={timelineRowRef}>
                    <Keyframe className="easing-keyframe" />
                    <div className="easing-tick" />
                    <div className="easing-tick" />
                    <div className="easing-tick" />
                    <div className="easing-tick" />
                    <div className="easing-tick" />
                    <div className="easing-tick" />
                    <div className="easing-tick" />
                    <div className="easing-tick" />
                    <div className="easing-tick" />
                    <Keyframe className="easing-keyframe" />
                    <Playhead className="easing-playhead" />
                </div>
            </div>
            <div className="progress-holder">
                <div className="easing-progress-card">
                    <div className="easing-progress-percentage">{animationProgress.percentage}%</div>
                    <div className="easing-progress-label">Complete</div>
                </div>
                <div className="easing-progress-card">
                    <div className="easing-progress-percentage">{animationProgress.px}px</div>
                    <div className="easing-progress-label">Difference</div>
                </div>
            </div>
        </div>
    );
}
