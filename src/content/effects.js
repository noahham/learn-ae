// import diagramOne from "../assets/images/keyframes/diagram-1.png";
// import diagramTwo from "../assets/images/keyframes/diagram-2.png";
// import effectsAnim from "../assets/animations/effects.json";

const effectsContent = {
  title: "EFFECTS",
  accent: "#FFC43D",
  download: {
    label: "Download Demo",
    sizeLabel: "167mb ZIP File.",
    href: "/downloads/effects-demo.zip",
  },
  // animation: effectsAnim,
  nextPage: {
    slug: "keyframes",
    heading: "KEYFRAMES",
    label: "Keyframes",
  },
  blocks: [
    {
      type: "paragraph",
      text: "There are a *ton* of effects that you can choose from in After Effects. Honestly, too " +
          "many to even touch on in this guide. Effects can change color, brightness, blur, " +
          "transparency, or pretty much anything else you can think of. To this day, I’m still " +
          "learning about new effects and effect techniques, so understand that you don’t need to " +
          "know what every single effect does. One of the best ways to learn about them is just by " +
          "messing around. From your `Effects and Presets Panel` (most likely in the top right), try" +
          " adding some random effects to your layers and see what happens!",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "Effects and presets panel",
    },


    { type: "header", text: "In After Effects..." },
    {
      type: "paragraph",
      text: "You won’t always see an immediate change as soon as you apply an effect. For example, " +
          "Gaussian Blur has a default blur radius of 0, which means nothing is actually being " +
          "blurred when it’s first applied. To change this, you have two options. First, in the " +
          "`Effects Controls Panel`. ",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "Effects controls panel",
    },
    {
      type: "paragraph",
      text: "For now, this is undisputedly the better option. All the parameters are easily visible " +
          "and adjustable. You can click and drag left and right on the colored numbers to gradually" +
          " change them, or just type in a number. Any changes you make should be immediately " +
          "visible in your `Composition Panel`. The second option is in the layers panel. If you " +
          "keep clicking on those downwards-facing arrows to the left of the layer name, you will " +
          "eventually find all of the same effect controls from the first option. I wouldn’t " +
          "recommend using this for now, not until we get to Keyframes.",
    },
    {
      type: "paragraph",
      text: "Not every effect will work for every kind of layer. Many effects might require a text " +
          "layer, or won’t visibly do anything without some kind of transparency in the layer. " +
          "Sometimes, an idea in your head is best made with multiple effects, not just one. Try to " +
          "get creative with it, effects are building blocks, not one-size-fits-all solutions.",
    },
    {
      type: "paragraph",
      text: "The PARTS acronym is one of the most valuable hotkeys you can memorize. That’s for " +
          "Position, Anchor, Rotation, Transparency, and Scale. For whatever reason, these " +
          "attributes aren’t included in the effect controls panel (unlike Premiere, which is also " +
          "made by Adobe), so hitting any of those keys will twirl down the respective attribute in " +
          "the layer panel. With no layer selected, the attribute will open for all layers. Just hit" +
          " the same key again to collapse it all.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "HOTKEY",
    },
  ],
};

export default effectsContent;
