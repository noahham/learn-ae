// import diagramOne from "../assets/images/keyframes/diagram-1.png";
// import diagramTwo from "../assets/images/keyframes/diagram-2.png";

const keyframesContent = {
  title: "KEYFRAMES",
  download: {
    label: "Download Demo",
    sizeLabel: "167mb ZIP File.",
    href: "/downloads/keyframes-demo.zip",
  },
  nextPage: {
    slug: "easing",
    heading: "EASING",
    label: "Easing",
  },
  blocks: [
    {
      type: "paragraph",
      text: "In software, there are two main ways to animate objects. The first is with physics " +
          "simulations, commonly found in 3D programs like Blender, Cinema 4D, or some AE plugins. " +
          "They’re realistic because they’re built to simulate real life. You apply gravity or some " +
          "force onto an object and the physics engine will calculate how it moves. While it’s all " +
          "mathematically correct, it’s hard to get a simulation to look exactly how you want. " +
          "There’s a lot of factors, real life is complicated.",
    },
    {
      type: "paragraph",
      text: "Although commonly more work than physics, the second method allows you to get exactly " +
          "the result you imagine. It’s called keyframing, and I’ll explain how it works.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "ANIMATION two keyframes with a mini playhead and an animation above them",
    },
    {
      type: "paragraph",
      text: "Seen above, the two half-shaded diamonds are your keyframes. Each keyframe stores both " +
          "a timestamp and the value of the property that you’re animating. In the example above, " +
          "the first keyframe promises that at Frame 0, the Position is 0. Similarly, the second " +
          "keyframe promises that at Frame 10, the Position is 100. That’s what you create. In the " +
          "background, After Effects will do the math on what happens *between* those two keyframes." +
          " With some math, AE calculates the shape must move exactly 10 pixels each frame to get " +
          "from the first to second keyframe in 10 frames. Imagine a road trip where you can " +
          "guarantee that you’ll get to your destination on a certain day by traveling the exact " +
          "same distance every day.",
    },
    {
      type: "paragraph",
      text: "You can apply this idea to literally any property: rotation, opacity, audio volume, " +
          "even properties from effects. This is where keyframing gets complicated sometimes. Let’s " +
          "talk about this animation of a square falling from the sky.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "square falling from the sky",
    },
    {
      type: "paragraph",
      text: "In a physics sim, you would place a cube in the sky, turn on gravity, maybe add some " +
          "elasticity for bounce, then hit play. For keyframing, this animation is a nightmare. " +
          "Starting with the position, you have to get the right timing for how fast it falls, " +
          "animate the rotation, decide how many times it’ll bounce (and bounces are the WORST), and" +
          " tweak it over and over and over until it looks kind of real. And even after all that, it" +
          " will still have this sort of cartoonish simplicity to it. For now, the best advice for " +
          "keyframing is to keep it simple. Once you’ve developed an intuition for the basics, you " +
          "can feel free to go crazy, but you’re likely to be overwhelmed and frustrated if you try " +
          "that right now.",
    },


    { type: "header", text: "In After Effects..." },
    {
      type: "paragraph",
      text: "You know how I said to use the `Properties Panel` instead of the `Layers Panel` for " +
          "shape properties? And then again, use the `Effects Controls Panel` instead of the " +
          "`Layers Panel` for effects controls. Keyframes are the reason why all those options are " +
          "in the Layers panel. Open any property (remember PARTS?) and click the stopwatch to the " +
          "left of the property’s name. It should turn blue and a new keyframe should be created " +
          "under the playhead. Try moving the playhead somewhere else and clicking the open diamond " +
          "farther left of the stopwatch. There’s another keyframe. Each time you make a keyframe, " +
          "it’s created at the playhead’s current location.",
    },
    {
      type: "paragraph",
      text: "You can tell if you’re hovering a keyframe when the open diamond is filled and blue. " +
          "While hovering a keyframe, change the value of the property, then hit play. Notice how " +
          "the value changes as the playhead passes between the keyframes?",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "BLACK BOX playhead scrubbing through keyframe’s positional animation",
    },
    {
      type: "paragraph",
      text: "Now click on the stopwatch again. Your keyframes should disappear. Disabling the " +
          "stopwatch will delete all the hard work you’ve put into your keyframes, so be careful.",
    },
  ],
};

export default keyframesContent;
