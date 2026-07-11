// import diagramOne from "../assets/images/keyframes/diagram-1.png";
// import diagramTwo from "../assets/images/keyframes/diagram-2.png";

const blendingContent = {
  title: "BLENDING",
  download: {
    label: "Download Demo",
    sizeLabel: "167mb ZIP File.",
    href: "/downloads/blending-demo.zip",
  },
  nextPage: {
    slug: "rendering",
    heading: "RENDERING",
    label: "Rendering",
  },
  blocks: [
    {
      type: "paragraph",
      text: "Let’s go back to that stack of papers from Layers. We know that the papers can be " +
          "reordered (from Layers) and transformed (PARTS), but what if we wanted to change the " +
          "paper’s material? That’s where Blending Modes come in.",
    },
    {
      type: "paragraph",
      text: "In After Effects, there are 38 different blending modes that use their own unique " +
          "algorithm to decide how a layer is composited on top of each layer beneath it. Of the " +
          "38, you’ll probably only use less than 10.",
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
      // src: diagramOne,
      alt: "mode in layers panel",
    },
    {
      type: "paragraph",
      text: "Since one of After Effects’ uses is as a compositing VFX software, the blending modes " +
          "can help with different overlays and vfx that you might find online. Just look up and " +
          "download a “lens burn overlay” and apply the `Overlay`, `Screen`, or `Linear Dodge (Add)`" +
          " blending mode to it. ",
    },
    {
      type: "image",
      // src: diagramOne,
      alt: "images of no vfx, vfx unblended, then comped over",
    },
    {
      type: "paragraph",
      text: "Using its algorithm, the blending mode removes the black background. It makes darker " +
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
      type: "image",
      // src: diagramOne,
      alt: "photo example of the star",
    },
    {
      type: "paragraph",
      text: "This is applicable for adjustment layers of every size using any effect. One " +
          "interesting effect to use alongside Adjustment Layers is Transform. Looking inside " +
          "Transform’s effect properties, it’s mostly stuff you’ve seen before. Through the lens " +
          "of applying it to a single layer, it’s redundant. You already have the most important " +
          "properties built-in with PARTS. Using it with an Adjustment Layer is much more " +
          "interesting. Try changing the position of an Adjustment Layer with an effect applied to " +
          "it with `P` from PARTS. The footage under it stays in the same place, but the affected " +
          "area under it shifts around. Now change the position through Transform’s effect " +
          "properties. Now, everything under it should move around as well. This is because " +
          "Transform’s position is applied as an effect, not a layer property. Adjustment Layers " +
          "project their effects onto the area underneath them.",
    },
  ],
};

export default blendingContent;
