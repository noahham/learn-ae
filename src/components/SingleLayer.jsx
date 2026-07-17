import React, { useEffect, useRef } from "react";
import "../styles/Layers.css";
import "../styles/SingleLayer.css";
import LottiePlayer from "./LottiePlayer";
import Playhead from "../assets/vectors/short-playhead.svg?react";
import animation from "../assets/animations/single-layer.json";

export default function SingleLayer() {
    const playheadWrapperRef = useRef(null);
    const layerYellowRef = useRef(null);
    const layerUncroppedRef = useRef(null);
    const viewfinderYellowRef = useRef(null);
    const rafRef = useRef(null);

    // drag state lives in refs, not React state, so dragging doesn't trigger re-renders
    const dragRef = useRef({ dragging: false, startX: 0, startOffset: 0 });
    const offsetRef = useRef(0); // current translateX in px

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function getBounds() {
        const track = layerUncroppedRef.current;
        const layer = layerYellowRef.current;
        if (!track || !layer) return { min: 0, max: 0 };
        const trackWidth = track.clientWidth;
        const layerWidth = layer.offsetWidth;
        const min = Math.min(0, trackWidth - layerWidth);
        const max = Math.max(0, trackWidth - layerWidth);
        return { min, max };
    }

    function handlePointerDown(e) {
        const layer = layerYellowRef.current;
        if (!layer) return;
        dragRef.current = { dragging: true, startX: e.clientX, startOffset: offsetRef.current };
        layer.setPointerCapture(e.pointerId);
    }

    function handlePointerMove(e) {
        if (!dragRef.current.dragging) return;
        const { startX, startOffset } = dragRef.current;
        const { min, max } = getBounds();
        const next = clamp(startOffset + (e.clientX - startX), min, max);
        offsetRef.current = next;
        if (layerYellowRef.current) {
            layerYellowRef.current.style.transform = `translateX(${next}px)`;
        }
    }

    function handlePointerUp(e) {
        dragRef.current.dragging = false;
        const layer = layerYellowRef.current;
        if (layer && layer.hasPointerCapture(e.pointerId)) {
            layer.releasePointerCapture(e.pointerId);
        }
    }

    useEffect(() => {
        function rectsIntersect(a, b) {
            return !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
        }

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
            const ly = layerYellowRef.current;

            if (!wrapper || !ly) {
                rafRef.current = requestAnimationFrame(check);
                return;
            }

            // try to get the actual SVG element inside the wrapper (the Playhead component)
            const playheadEl = wrapper.querySelector && wrapper.querySelector("svg") ? wrapper.querySelector("svg") : wrapper.firstElementChild;
            const pr = playheadEl ? getVisibleRect(playheadEl) : wrapper.getBoundingClientRect();
            const yellowRect = ly.getBoundingClientRect();

            const yellowHit = rectsIntersect(pr, yellowRect);

            if (viewfinderYellowRef.current) viewfinderYellowRef.current.style.opacity = yellowHit ? "1" : "0";

            rafRef.current = requestAnimationFrame(check);
        }

        rafRef.current = requestAnimationFrame(check);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div className="layer-card">
            <div className="viewfinder">
                <div ref={viewfinderYellowRef} className="yellow-square">
                    <LottiePlayer animationData={animation} loop />
                </div>

            </div>

            <div className="timeline">
                <div className="layers">
                    <div className="timeline-nav" />
                    <div ref={layerUncroppedRef} className="layer layer-yellow-uncropped">
                        <div
                            ref={layerYellowRef}
                            className="layer layer-yellow"
                            onPointerDown={handlePointerDown}
                            onPointerMove={handlePointerMove}
                            onPointerUp={handlePointerUp}
                        />
                    </div>
                </div>

                 {/* wrapper around playhead to reliably query the rendered SVG inside */}
                 <div ref={playheadWrapperRef} className="playhead-wrapper">
                     <Playhead width={276} height={276} className={"single-playhead"} />
                 </div>
            </div>
        </div>
    );
}