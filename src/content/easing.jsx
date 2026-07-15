// import diagramOne from "../assets/images/keyframes/diagram-1.png";
// import diagramTwo from "../assets/images/keyframes/diagram-2.png";
import easingAnim from "../assets/animations/easing.json";

const easingContent = {
  title: "EASING",
  accent: "#910DDD",
  download: {
    label: "Download Demo",
    sizeLabel: "167mb ZIP File.",
    href: "/downloads/easing-demo.zip",
  },
  animation: easingAnim,
  nextPage: {
    slug: "blending",
    heading: "BLENDING",
    label: "Blending",
  },
  blocks: [
    {
      type: "paragraph",
      text: "From keyframes, we now know that After Effects uses keyframes as a starting and " +
          "stopping point for animation. It travels exactly the same distance each frame until it " +
          "reaches the end. But in real life, how many things really travel so linearly? Almost " +
          "nothing. Imagine driving a car, and you see a red light coming up. Do you really travel " +
          "the exact same distance each second until you get to that light? Of course not, it’d be " +
          "the most uncomfortable stop ever. As you pull up to that light, you *ease into* the " +
          "brakes. When the light flips green, you *ease off* of the brake and onto the gas. This is" +
          " the fundamental idea of easing. The linear motion from Keyframes feels robotic because " +
          "it’s literally the easiest way for a computer to calculate motion. By adding a bit of " +
          "complexity, you can get better looking, stylized, more realistic results.",
    },
    {
      type: "paragraph",
      text: "There is one major tradeoff that you have to consider when using easing. If you keep " +
          "the keyframes the same distance apart but slow down some part of the animation, After " +
          "Effects *must* keep the promise to arrive at the second keyframe on time by speeding up " +
          "some other part of the animation to compensate. This is best shown with an easing curve.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "basic ease in/out curve",
    },
    {
      type: "paragraph",
      text: "This is an easing curve. The x-axis is Time, the y-axis is % Complete. That is, if the " +
          "y-level is at 50%, the animation is halfway done. In the case of the animation below, the" +
          " red circle would be exactly halfway between the green and yellow squares.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "Red circle moving between a green and yellow square",
    },
    {
      type: "paragraph",
      text: "In the easing curve, we’re looking at how the slope changes at different parts of the " +
          "curve (velocity). If the slope is always the same (think y = x), the motion will be " +
          "linear. In the easing curve I gave you, notice how the start and end of the curve are " +
          "very horizontal, while the middle is more vertical. This means that compared to a linear " +
          "curve, the animation will start slow, speed up, then end slow.",
    },


    { type: "header", text: "In After Effects..." },
    {
      type: "paragraph",
      text: "In AE, easing is a bit complex. To begin easing, click and drag over your keyframes to " +
          "highlight them, then apply easy easing to them.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "HOTKEY",
    },
    {
      type: "paragraph",
      text: "This will give you a very basic curve where the motion slows as you approach each " +
          "keyframe. It *eases out* of old keyframes and *eases in* to the new ones. To actually " +
          "customize the easing, open the Graph Editor with the curve icon at the top of the Layer " +
          "panel. In order to see anything, first click on any property under a layer.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "show pic of graph editor",
    },
    {
      type: "paragraph",
      text: "If you did the Bezier Game that I recommended in Shapes, you’ll find that a linear " +
          "keyframe (diamond shaped) is like a Pen Tool point without any handles, while an eased " +
          "keyframe (hourglass-shaped) *does* have handles. By adjusting these handles, you can " +
          "achieve an easing curve.",
    },
    {
      type: "paragraph",
      text: "There are two views in the Graph Editor: the Value Graph and the Speed Graph. For the " +
          "calculus nerds, the Value Graph really depicts speed and the Speed Graph shows velocity, " +
          "but that’s not really important. The Value Graph is exactly like the easing curves I’ve " +
          "been discussing so far. Vertical means fast, horizontal means slow. In the Speed Graph, " +
          "the actual speed is measured. A higher value means faster motion, lower means slower. " +
          "Here’s an example of what smooth motion looks like on the Value Graph vs Speed Graph.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "smooth motion on value and speed",
    },
    {
      type: "paragraph",
      text: "The graph that you decide to use is dependent on both your preference and what you " +
          "might be trying to achieve with your easing. Personally, I like to keep mine on the Speed" +
          " Graph as a default and swap to the Value Graph when it’s easier. Just remember you have " +
          "both, it’s always good to have more tools.",
    },
    {
      type: "paragraph",
      text: "Speaking of tools, there is one extra, super popular plugin that many animators swear " +
          "by. It’s called Flow. It’s essentially just an interface that lets you make a custom " +
          "curve, then apply it to some keyframes, kind of like how Easy Ease gives you some preset " +
          "easing. It won’t do all the work for you, but it makes 70% of it a lot easier.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "link and pic to Flow",
    },
  ],
};

export default easingContent;
