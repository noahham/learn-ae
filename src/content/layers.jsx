// import diagramOne from "../assets/images/keyframes/diagram-1.png";
// import diagramTwo from "../assets/images/keyframes/diagram-2.png";
import layersAnim from "../assets/animations/layers.json";
import MultiLayer from "../components/MultiLayer.jsx";
import SingleLayer from "../components/SingleLayer.jsx";
import HotkeysGroup from "../components/HotkeysGroup";


const layersContent = {
  title: "LAYERS",
  accent: "#910DDD",
  download: {
    label: "Download Demo",
    sizeLabel: "167mb ZIP File.",
    href: "/downloads/layers-demo.zip",
  },
  animation: layersAnim,
  nextPage: {
    slug: "shapes",
    heading: "SHAPES",
    label: "Shapes",
  },
  blocks: [
    {
      type: "paragraph",
      text: "Layers are the foundation of AE. If you’ve never used a layer-based program before, " +
          "imagine a stack of different types of paper on top of each other. The papers might be " +
          "solid, see-through, colored, or cut, but you can only  look at it from directly above. You'll" +
          " see the topmost paper. If it has holes or transparent parts, you can see the different " +
          "papers under it, which might have their own gaps and transparencies. In After Effects, " +
          "this stack of papers is called a composition.",
    },


    { type: "header", text: "In After Effects..." },
    {
      type: "paragraph",
      text: "If the `Composition Panel` is looking at your stack of papers from the top, the " +
          "timeline is looking at it from the side. Kind of. In After Effects, each thing (whether " +
          "it’s a video, image, text, or shape) is in its own layer. The width of the layer is the " +
          "amount of frames that it’s visible. Its horizontal location is *when* it’s visible.",
    },
    {
      type: "component",
      node: <MultiLayer />,
    },
    {
      type: "paragraph",
      text: "As you can see, each layer is only visible when the playhead (the white thing with the " +
          "notch at the top) touches it. In AE, you can adjust their ordering and timings with the " +
          "hotkeys below.",
    },
    {
      type: "component",
      node: <HotkeysGroup hotkeys={[
        { letter: "[", label: "Move start to playhead." },
        { letter: "]", label: "Move end to playhead." },
        { letter: ["OPT", "["], label: "Trim start to playhead." },
        { letter: ["OPT", "]"], label: "Trim end to playhead." },
        { letter: ["CMD", "["], label: "Move layer up." },
        { letter: ["CMD", "]"], label: "Move layer down." },
      ]} />,
    },
    {
      type: "paragraph",
      text: "As you can tell, manipulating layers is pretty simple. On top of being able to trim, move, and reorder " +
          "them, videos in particular are kind of weird. You can actually slide part of " +
          "the video in order to change which part of the video is actually shown for the layer.",
    },
    {
      type: "component",
      node: <SingleLayer />,
    },
    { type: "header", text: "Precompositions" },
    {
      type: "paragraph",
      text: "One more thing. You can bundle a group of layers into something called a precomposition" +
          " (or precomp). This can simplify your current composition and also optimize real-time " +
          "rendering a bit. Double clicking on a precomp will open it, like a folder on your desktop. From then, you" +
          " can click through the tabs at the top of the `Layers Panel` to go back to your original " +
          "composition. The new precomposition will also add another composition entry to your " +
          "`Project Panel`.",
    },
  ],
};

export default layersContent;
