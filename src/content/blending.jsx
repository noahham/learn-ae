import blendingModes from "../assets/images/blending/blending-modes.png";
import blendingAnim from "../assets/animations/blending.json";
import TripleImage from "../components/TripleImage.jsx";
import blend1 from "../assets/images/blending/blend-1.png";
import blend2 from "../assets/images/blending/blend-2.png";
import blend3 from "../assets/images/blending/blend-3.png";
import adjust1 from "../assets/images/shapes/mask-1.png";
import adjust2 from "../assets/images/shapes/mask-2.png";
import adjust3 from "../assets/images/blending/adjustment.png";
import { getDownloadSizeLabel } from "../utils/downloadMetadata.js";

const blendingContent = {
  title: "BLENDING",
  accent: "#177FCE",
  download: {
    label: "Download Demo",
    sizeLabel: getDownloadSizeLabel("/downloads/blending-demo.zip"),
    href: "/downloads/blending-demo.zip",
  },
  animation: blendingAnim,
  nextPage: {
    slug: "rendering",
    heading: "RENDERING",
    label: "Rendering",
  },
  blocks: [
    {
      type: "paragraph",
      text: "Let’s go back to that stack of papers from Layers. We know that the papers can be " +
          "reordered (see Layers) and transformed (`PARTS`, see Effects), but what if we wanted to change the " +
          "paper’s material? That’s where Blending Modes come in.",
    },
    {
      type: "paragraph",
      text: "In After Effects, there are 38 different blending modes that use their own unique " +
          "algorithm to decide how a layer is composited on top of each layer beneath it. Of the " +
          "38, you’ll probably use less than 10.",
    },
    { type: "header", text: "In After Effects..." },
    {
      type: "paragraph",
      text: "You can change a layer’s blending mode by finding the dropdown in the Layers panel, " +
          "under “Mode”. If you haven’t done anything with the layer, it should currently be set " +
          "to “Normal”. Just like effects, the best way to learn is by starting to click on random " +
          "things and see what happens.",
    },
    {
      type: "image",
      src: blendingModes,
      alt: "Blending Modes",
    },
    {
      type: "paragraph",
      text: "Since one of After Effects’ purposes is as a VFX compositing software, the blending modes " +
          "can help with different overlays and vfx that you might find online. Just look up and " +
          "download a “lens burn overlay” and apply the `Overlay`, `Screen`, or `Linear Dodge`" +
          " blending mode to it. ",
    },
    {
      type: "component",
      node: (
        <TripleImage
          images={[blend1, blend2, blend3]}
          alts={["Starting Footage", "Overlay", "Footage with Overlay"]}
        />
      ),
    },
    {
      type: "paragraph",
      text: "Using its algorithm, these blending modes remove the black background. It makes darker " +
          "areas transparent while keeping parts visible.",
    },
    { type: "header", text: "In After Effects..." },
    {
      type: "paragraph",
      text: "Also included in the Layers panel toggles is the Adjustment Layer toggle. Adjustment " +
          "Layers are kind of like a way to create your own custom blending mode and mask from a " +
          "layer you already have. Let’s say you have a star with a blur effect applied to it along " +
          "with a precomp of some other elements underneath. By enabling the Adjustment Layer option" +
          " for the star, the star disappears and the area under is now blurred. This will apply the" +
          " blur to every layer that’s visible under the star.",
    },
    {
      type: "component",
      node: (
        <TripleImage
          images={[adjust1, adjust2, adjust3]}
          alts={["Adjustment Alpha", "Background", "Background with Adjustment"]}
        />
      ),
    },
    {
      type: "paragraph",
      text: "This is applicable for adjustment layers of every size using any effect. One " +
          "interesting effect to use alongside Adjustment Layers is Transform. Looking inside " +
          "Transform’s effect properties, it’s mostly stuff you’ve seen before. Through the lens " +
          "of applying it to a single layer, it’s redundant. You already have the most important " +
          "properties built-in with `PARTS`. Using it with an Adjustment Layer is much more " +
          "interesting.",
    },
    {
      type: "paragraph",
      text: "Try changing the position of an Adjustment Layer with an effect applied to " +
          "it with `P` from PARTS. The footage under it stays in the same place, but the affected " +
          "area under it shifts around. Now change the position through Transform’s effect " +
          "properties. Now, everything under it should move around as well. This is because " +
          "Transform’s position is applied as an effect, not a layer property. Adjustment Layers " +
          "project their effects onto the area underneath them.",
    }
  ],
};

export default blendingContent;
