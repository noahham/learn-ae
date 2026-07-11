// import diagramOne from "../assets/images/keyframes/diagram-1.png";
// import diagramTwo from "../assets/images/keyframes/diagram-2.png";

const shapesContent = {
  title: "SHAPES",
  download: {
    label: "Download Demo",
    sizeLabel: "167mb ZIP File.",
    href: "/downloads/shapes-demo.zip",
  },
  nextPage: {
    slug: "effects",
    heading: "EFFECTS",
    label: "Effects",
  },
  blocks: [
    {
      type: "paragraph",
      text: "So now we know that our layers can be images or videos. What if we want something " +
          "simpler? What about something that doesn’t lose resolution as it’s made larger or " +
          "smaller? This is exactly what shapes are for. Instead of storing the data for the " +
          "millions of pixels stored in an external file (like a `.png` or `.mp4`), shapes are a set" +
          " of points and curve values that are really easy for the project file to remember without" +
          " another file to keep track of.",
    },


    { type: "header", text: "In After Effects..." },
    {
      type: "paragraph",
      text: "You can make basic shapes using the top left toolbar. Click and hold on the Rectangle " +
          "icon, then pick the shape you’d like to start with. For each type of preset shape, there " +
          "are several properties that you can adjust. These properties can be accessed either " +
          "through the `Layer Panel` by continuously twirling down arrows starting with the one to " +
          "the left of the layer name or (and this is the way better option for now), using the " +
          "newer, more concise `Properties Panel`. ",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "properties panel",
    },
    {
      type: "paragraph",
      text: "This panel is on the left in the panel stack, so you’ll have to click on it to expand " +
          "it. Under `Shape Properties`, you’ll find a lot of interesting options. For example, a " +
          "star can be made into a triangle by changing the amount of points to three. To create the" +
          " shape, click and drag across the `Composition Panel`. You can also hold Shift to create " +
          "a shape with the same width and height. Feel free to explore the rest of that `Properties" +
          " Panel` as well, it’s extremely useful.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "HOTKEY",
    },
    {
      type: "paragraph",
      text: "For making more custom, advanced shapes, there’s the `Pen Tool`. Every shape, even the " +
          "most basic ones, are made up of points and curve values. The pen tool lets you literally " +
          "create your own points and curves (you could use the Pen Tool to make *any shape*). It’s " +
          "really hard to explain how to use this tool by watching a video or reading a guide, you " +
          "kind of have to just try it out yourself. One of the best resources that taught me how to" +
          " use it properly was the Bezier Game from method.ac. It’s really fun to try to draw these" +
          " random shapes and you pick it up pretty fast. Pay attention to the hotkeys here though, " +
          "you need them to curve the path.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "HOTKEY",
    },


    { type: "header", text: "Masking" },
    {
      type: "paragraph",
      text: "A more advanced use of shapes and the `Pen Tool` is to create masks. Masking is a " +
          "technique that involves using one shape or layer to cut away some other layer. Below, you" +
          " can see that by using the star as a mask for the image, the image’s size is limited to " +
          "the star.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "masked star thing",
    },


    { type: "header", text: "Masking in After Effects" },
    {
      type: "paragraph",
      text: "We can create a mask by first selecting the layer we want to mask in the first place, " +
          "then drawing a shape with the Pen Tool or just creating a simple shape on top of the " +
          "layer. You should now see a new Mask 1 property under the layer that was masked. You can " +
          "change the color of the outline by clicking the colored box or invert the mask and change" +
          " its blending mode (see Blending Modes). Twirling down the arrow will show a few options." +
          " Try messing around with those to see how they work, it should be pretty easy to figure " +
          "it out.",
    },
    {
      type: "paragraph",
      text: "If you ever collapse that menu, there’s a hotkey to open it back up without clicking " +
          "through all those arrows. It won’t show you the Feather, Opacity, and Expansion options " +
          "(probably since you’ve already locked those in when you made the mask), but it will show " +
          "the Mask Path which can be animated (see Keyframes).",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "HOTKEY",
    },
  ],
};

export default shapesContent;
