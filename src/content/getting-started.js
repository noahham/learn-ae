// import diagramOne from "../assets/images/keyframes/diagram-1.png";
// import diagramTwo from "../assets/images/keyframes/diagram-2.png";

const gettingStartedContent = {
  title: "THE START",
  accent: "#E3170A",
  download: {
    label: "Download All Demos",
    sizeLabel: "167mb ZIP File.",
    href: "/downloads/all-demos.zip",
  },
  nextPage: {
    slug: "layers",
    heading: "LAYERS",
    label: "Layers",
  },
  blocks: [
    {
      type: "paragraph",
      text: "WASSUP PARTY PEOPLE! After struggling through learning After Effects (or AE) throughout" +
          " the past few years, I’ve decided to create the resource that I wish I had when I had " +
          "started. This guide will give you a starting point to be able to follow more complex " +
          "tutorials. According to the 80/20 rule, you’ll do 80% of your work in AE with only 20% " +
          "of the features. I’m going to teach you how to use most of that 20% at a very basic " +
          "level.",
    },
    {
      type: "paragraph",
      text: "Throughout this website, I will also include some activities for you. Many of the more " +
          "complex demos will be downloadable project files, but there will also be a few " +
          "interactive animations embedded inside the website.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "BLACK BOX interactive fun game",
    },
    {
      type: "paragraph",
      text: "Opening After Effects for the very first time, you’ll notice a lot of different boxes," +
          " or sections. We call them panels. Throughout this guide, I’ll tell you to find many " +
          "different settings and options within these panels. Now, I wouldn’t recommend doing this " +
          "just yet, but these panels are resizable, movable, even closable. If you ever can’t find " +
          "a panel that I or another tutorial is talking about, all you have to do is go to the " +
          "options at the very top and hit `Window`. This should give you a list of all the " +
          "different panels, whether they’re currently open or not. Clicking on the one you want " +
          "will highlight it if it's open or open it if it’s currently closed.",
    },


    { type: "header", text: "Technical Stuff" },
    {
      type: "paragraph",
      text: "The amount of memory (RAM) your computer has is an important factor for using AE. As " +
          "you move through the demos, you’ll find a green bar above your layers. Sometimes it’ll be" +
          " visible, sometimes it won't be. This indicates whether the portion of the video below is" +
          " rendered and ready to be played. You can’t play any part that doesn’t have a green line " +
          "above it. Since all of those render files are stored on your memory, the size of the " +
          "green line is only as big as your memory is. While the demos I’ve made should be pretty " +
          "light in terms of memory, working on your own projects may warrant an upgrade to your " +
          "system.",
    },
    {
      type: "paragraph",
      text: "You should also know about the Disk Cache. When your RAM is full, but AE still needs to" +
          " render more frames, it will write to your Disk Cache. In AE’s settings, you can adjust " +
          "the amount of space on your computer that you will let AE use for its Disk Cache. In my " +
          "experience, no matter how much RAM you have, this Disk Cache will fill up to as much as " +
          "you let it. When it gets full, all you have to do is go into the settings and find `Disk " +
          "> Empty Disk Cache…`. Please, make sure you always have enough storage on your computer " +
          "to allow the Disk Cache to be completely full without running out of space.",
    },


    { type: "header", text: "Linked Media" },
    {
      type: "paragraph",
      text: "Some of the demos that I’ve provided will use videos and images. Unlike vector-based " +
          "shapes that are easy for AE to remember (see Shapes), videos and images are a lot of data" +
          " for the project file to hold onto. Make sure to keep your media in the same relative " +
          "spot to your project file so that After Effects knows where to find it. Whether it’s in " +
          "the same folder or a subfolder to the project file, keep it in the same spot.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "missing footage",
    },
    {
      type: "paragraph",
      text: "If your footage ever gets unlinked (as seen above), find the `Project Panel`, then " +
          "right click the missing footage and navigate `Replace Footage > File`. From then, all you" +
          " have to do is find the file that AE lost.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "project panel",
    },


    { type: "header", text: "Project Files" },
    {
      type: "paragraph",
      text: "Although I’ll introduce each demo project file in its respective page, feel free to " +
          "download them all here. If you’re the type of person to build your Legos without " +
          "instructions, there’s nothing stopping you from checking them all out right now. From the" +
          " main menu, hit `Open Project` and find all of the files you’ve downloaded. The task for " +
          "each file is embedded within the project itself.",
    },
  ],
};

export default gettingStartedContent;
