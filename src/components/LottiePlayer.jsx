import { useEffect, useRef } from "react";
import lottie from "lottie-web";

// Plays a Lottie JSON animation into a plain div via lottie-web directly.
// We never import a component from a third-party package and use it as a
// JSX tag here — only a ref + a function call — so bundler default-export
// interop quirks (the "Element type is invalid ... got: object" class of
// error some lottie React wrappers trigger under Vite/webpack) can't apply.
export default function LottiePlayer({ animationData, loop = true, autoplay = true, className }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !animationData) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop,
      autoplay,
      animationData,
    });

    return () => anim.destroy();
  }, [animationData, loop, autoplay]);

  return <div ref={containerRef} className={className} />;
}
