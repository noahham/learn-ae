import { useEffect, useRef } from "react";
import lottie from "lottie-web";

// Plays a Lottie JSON animation into a plain div via lottie-web directly.
// Supports an optional "playOnHover" mode where the animation is shown
// at its first frame by default and plays once when the user hovers.
export default function LottiePlayer({
  animationData,
  loop = true,
  autoplay = true,
  className,
  playOnHover = false, // if true: don't autoplay; play once on hover and show first frame otherwise
  hoverParent = false, // if true and playOnHover, attach hover listeners to parent element
  respectReducedMotion = true, // if true, don't autoplay/playOnHover when user prefers reduced motion
}) {
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const listenersTargetRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !animationData) return;

    const prefersReduce = typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const effectivePlayOnHover = playOnHover && !(respectReducedMotion && prefersReduce);

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: effectivePlayOnHover ? false : loop,
      autoplay: effectivePlayOnHover ? false : autoplay,
      animationData,
      rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
    });

    animRef.current = anim;

    anim.addEventListener("DOMLoaded", () => {
      try {
        if (effectivePlayOnHover || !autoplay) {
          anim.goToAndStop(0, true);
        }
      } catch (e) {
        // ignore
      }
    });

    // If play-on-hover is enabled and allowed, attach listeners to the right target
    const handleEnter = () => {
      const a = animRef.current;
      if (!a) return;
      try {
        a.goToAndPlay(0, true);
      } catch (e) {
        a.play();
      }
    };
    const handleLeave = () => {
      const a = animRef.current;
      if (!a) return;
      try {
        a.goToAndStop(0, true);
      } catch (e) {
        a.stop();
      }
    };

    if (effectivePlayOnHover) {
      const target = (hoverParent && containerRef.current && containerRef.current.parentElement)
        ? containerRef.current.parentElement
        : containerRef.current;
      listenersTargetRef.current = target;
      // use pointer events so it works with touch/pointer input as well
      target.addEventListener("pointerenter", handleEnter);
      target.addEventListener("pointerleave", handleLeave);
    }

    return () => {
      try {
        if (listenersTargetRef.current) {
            listenersTargetRef.current.removeEventListener("pointerenter", handleEnter);
            listenersTargetRef.current.removeEventListener("pointerleave", handleLeave);
          listenersTargetRef.current = null;
        }
      } catch (e) {
        // ignore
      }
      anim.destroy();
      animRef.current = null;
    };
  }, [animationData, loop, autoplay, playOnHover, hoverParent, respectReducedMotion]);

  return <div ref={containerRef} className={className} />;
}
