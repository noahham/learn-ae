import "./HiFiLanding.css";
import { useEffect, useRef } from "react";

import {
  IconPlayerPlay,             // Start
  IconLayersSubtract,         // Layers
  IconShape,                  // Shapes
  IconAdjustments,            // Effects
  IconKeyframes,              // Keyframes
  IconEaseInOutControlPoints, // Easing
  IconBlendMode,              // Blending
  IconUpload,                 // Rendering

  IconArrowBarToDown,         // Small Download
  IconArrowNarrowRight,       // Small Next
  IconDownload,               // Download
} from "@tabler/icons-react";

export default function HiFiLanding() {
  const cardNextHolderRef = useRef(null);
  const cardNextRef = useRef(null);
  const cardEyebrowRef = useRef(null);
  const cardHeadingRef = useRef(null);

  useEffect(() => {
    const calculateOffset = () => {
      if (!cardNextHolderRef.current || !cardNextRef.current) return;

      const cardNextHeight = cardNextRef.current.offsetHeight;
      const cardNextHolderHeight = cardNextHolderRef.current.offsetHeight;

      // Move down by card-next height, then back up 24px + holder height
      // Net offset = cardNextHeight - 24 - cardNextHolderHeight
      const offset = cardNextHeight - 16 - cardNextHolderHeight;

      cardNextHolderRef.current.style.setProperty(
        "--card-next-offset",
        `${offset}px`
      );
    };

    const calculateMarginOffsets = () => {
      if (!cardNextRef.current || !cardEyebrowRef.current || !cardHeadingRef.current) return;

      const cardNextWidth = cardNextRef.current.offsetWidth;
      const eyebrowWidth = cardEyebrowRef.current.offsetWidth;
      const headingWidth = cardHeadingRef.current.offsetWidth;

      // Calculate margin-left needed to push each to the right
      const eyebrowMargin = cardNextWidth - eyebrowWidth - 54;
      const headingMargin = cardNextWidth - headingWidth - 54;

      cardEyebrowRef.current.style.setProperty(
        "--card-span-margin",
        `${eyebrowMargin}px`
      );
      cardHeadingRef.current.style.setProperty(
        "--card-span-margin",
        `${headingMargin}px`
      );
    };

    // Calculate on mount
    calculateOffset();
    calculateMarginOffsets();

    // Recalculate on window resize
    const handleResize = () => {
      calculateOffset();
      calculateMarginOffsets();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="page">
      <div className="top-fade" />

      <nav className="navbar">
        <IconPlayerPlay size={24} stroke={2} color="white" />
        <IconLayersSubtract size={24} stroke={2} color="white" />
        <IconShape size={24} stroke={2} color="white" />
        <IconAdjustments size={24} stroke={2} color="white" />
        <IconKeyframes size={24} stroke={2} color="white" />
        <IconEaseInOutControlPoints size={24} stroke={2} color="white" />
        <IconBlendMode size={24} stroke={2} color="white" />
        <IconUpload size={24} stroke={2} color="white" />
      </nav>

      <main className="main">
        <section className="hero">
          <div className="placeholder opening-graphic" />
          <h1 className="title">KEYFRAMING</h1>
          <div className="buttons">
            <button className="btn btn-primary">
              <span>Demo</span>
              <IconArrowBarToDown size={24} stroke={1.5} color="black" />
            </button>
            <button className="btn btn-outline">
              <span>Easing</span>
              <IconArrowNarrowRight size={24} stroke={1.5} color="white" />
            </button>
          </div>
        </section>

        <section className="content">
          <p className="paragraph">
            In software, there are two main ways to animate objects. The first is with physics
            simulations, commonly found in 3D programs like Blender, Cinema 4D, or some AE
            plugins. They&rsquo;re realistic because they&rsquo;re built to simulate real life.
            You apply gravity or some force onto an object and the physics engine will calculate
            how it moves. While it&rsquo;s all mathematically correct, it&rsquo;s hard to get a
            simulation to look exactly how you want. There&rsquo;s a lot of factors, real life is
            complicated.
          </p>

          <div className="image-wrap">
            <div className="placeholder image" />
          </div>

          <p className="paragraph">
            In a physics sim, you would place a cube in the sky, turn on gravity, maybe add some
            elasticity for bounce, then hit play. For keyframing, this animation is a nightmare.
            Starting with the position, you have to get the right timing for how fast it falls,
            animate the rotation, decide how many times it&rsquo;ll bounce (bounces are the
            WORST), and tweak it over and over and over until it looks kind of real. And even
            after all that, it will still have this sort of cartoonish simplicity to it. For now,
            the best advice for keyframing is to keep it simple. Once you&rsquo;ve developed an
            intuition for the basics, you can feel free to go crazy, but you&rsquo;re likely to be
            overwhelmed and frustrated if you try that right now.
          </p>

          <div className="section-header">
            <h2>In After Effects...</h2>
          </div>

          <p className="paragraph">
            You know how I said to use the <code>Properties Panel</code> instead of the <code>Layers Panel</code> for
            shape properties? And then again, use the <code>Effects Controls Panel</code> instead of the
            <code>Layers Panel</code> for effects controls. Keyframes are the reason why all those options
            are in the Layers panel. Open any property (remember PARTS?) and click the stopwatch
            to the left of the property&rsquo;s name. It should turn blue and a new keyframe
            should be created under the playhead. Try moving the playhead somewhere else and
            clicking the open diamond farther left of the stopwatch. There&rsquo;s another
            keyframe. Each time you make a keyframe, it&rsquo;s created at the playhead&rsquo;s
            current location.
          </p>

          <div className="cards">
            <div className="card card-download">
              <IconDownload
                  width={70}
                  height={76}
                  stroke={1.25}
                  color="white"
                  preserveAspectRatio="none"
              />
              <div className="card-download-text">
                <span className="card-title">Download Demo</span>
                <span className="card-subtitle">167mb ZIP File.</span>
              </div>
            </div>
            <div className="card card-next" ref={cardNextRef}>
              <div className="card-next-holder" ref={cardNextHolderRef}>
                <span className="card-eyebrow" ref={cardEyebrowRef}>Continue To</span>
                <span className="card-heading" ref={cardHeadingRef}>EASING</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
