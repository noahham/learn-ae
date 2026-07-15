import React, { useEffect, useRef } from "react";
import "./MultiLayer.css";
import Playhead from "../assets/vectors/playhead.svg?react";

export default function MultiLayer() {
  const playheadWrapperRef = useRef(null);
  const layerBlueRef = useRef(null);
  const layerPurpleRef = useRef(null);
  const viewfinderPurpleRef = useRef(null);
  const viewfinderBlueRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    function rectsIntersect(a, b) {
      return !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
    }

    // The playhead SVG is a 276x276 box, but the only part that's actually
    // visible is a 4px-wide line running down the exact middle of it. So
    // instead of measuring the whole frame, shrink it in by (276-4)/2 = 136px
    // on each side to get just that visible line's rect.
    const PLAYHEAD_FRAME_SIZE = 276;
    const PLAYHEAD_LINE_WIDTH = 4;
    const PLAYHEAD_INSET = (PLAYHEAD_FRAME_SIZE - PLAYHEAD_LINE_WIDTH) / 2;

    function getVisibleRect(svgEl) {
      const r = svgEl.getBoundingClientRect();
      return {
        left: r.left + PLAYHEAD_INSET,
        right: r.right - PLAYHEAD_INSET,
        top: r.top,
        bottom: r.bottom,
      };
    }

    function check() {
      const wrapper = playheadWrapperRef.current;
      const lb = layerBlueRef.current;
      const lp = layerPurpleRef.current;

      if (!wrapper || !lb || !lp) {
        rafRef.current = requestAnimationFrame(check);
        return;
      }

      // try to get the actual SVG element inside the wrapper (the Playhead component)
      const playheadEl = wrapper.querySelector && wrapper.querySelector("svg") ? wrapper.querySelector("svg") : wrapper.firstElementChild;
      const pr = playheadEl ? getVisibleRect(playheadEl) : wrapper.getBoundingClientRect();
      const blueRect = lb.getBoundingClientRect();
      const purpleRect = lp.getBoundingClientRect();

      const blueHit = rectsIntersect(pr, blueRect);
      const purpleHit = rectsIntersect(pr, purpleRect);

      if (viewfinderBlueRef.current) viewfinderBlueRef.current.style.opacity = blueHit ? "1" : "0";
      if (viewfinderPurpleRef.current) viewfinderPurpleRef.current.style.opacity = purpleHit ? "1" : "0";

      rafRef.current = requestAnimationFrame(check);
    }

    rafRef.current = requestAnimationFrame(check);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="multi-layer-card">
      <svg
        className="viewfinder"
        width="506"
        height="239"
        viewBox="0 0 506 239"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="505" height="238" rx="8" fill="#0C0E23" />
        {/* purple rect (second rect) */}
        <rect
          ref={viewfinderPurpleRef}
          className="purple-rect"
          x="38"
          y="58"
          width="124"
          height="124"
          fill="#910DDD"
          style={{ opacity: 0 }}
        />
        {/* white circle, always visible */}
        <circle
          cx="253"
          cy="120"
          r="62"
          fill="#E3170A"
        />
        {/* blue triangle */}
        <polygon
          ref={viewfinderBlueRef}
          className="blue-triangle"
          points="327,182 470.2,182 398.6,58"
          fill="#177FCE"
          style={{ opacity: 0 }}
        />
      </svg>

      <div className="timeline">
        <div className="layers">
          <div className="timeline-nav" />
          <div ref={layerBlueRef} className="layer layer-blue" />
          <div ref={layerPurpleRef} className="layer layer-purple" />
          <div className="layer layer-red" />
        </div>

        {/* wrapper around playhead to reliably query the rendered SVG inside */}
        <div ref={playheadWrapperRef} className="playhead-wrapper">
          <Playhead width={276} height={276} className={"playhead"} />
        </div>
      </div>
    </div>
  );
}
