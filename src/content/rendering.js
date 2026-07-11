// import diagramOne from "../assets/images/keyframes/diagram-1.png";
// import diagramTwo from "../assets/images/keyframes/diagram-2.png";

const renderingContent = {
  title: "RENDERING",
  download: {
    label: "Download Demo",
    sizeLabel: "167mb ZIP File.",
    href: "/downloads/idk-demo.zip",
  },
  nextPage: {
    slug: "idk",
    heading: "IDK",
    label: "IDK",
  },
  blocks: [
    {
      type: "paragraph",
      text: "Finally, we’re done with everything and now we want to share our video. You’ve got a " +
          "couple options on how you can render (AKA export) your video into a file that you can " +
          "share on YouTube, Instagram, or wherever.",
    },
    {
      type: "paragraph",
      text: "The first choice to make is the codec. You might be used to file types, you’ve probably" +
          " seen a lot of .mp4 files, maybe even a .mov. The codec *is not the same as the file " +
          "type*. For example, H.264 (the most common type for viewing) can come in the form of an " +
          ".mp4 *or* an .mov. A lossless format like Prores 422 will also be a .mov file, but won’t " +
          "be viewable for most services. Here’s a table of a few different codecs, their file " +
          "extensions, typical sizes, and the reasons you might pick them.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "TABLE",
    },
    {
      type: "paragraph",
      text: "Now that you understand what you’re looking for, let’s talk about how you’re going to " +
          "get there. For uncompressed or lossless codecs, you can export straight from AE. From the" +
          " top menu bar, navigate `File > Export > Add to Render Queue`. Your `Layers Panel` should" +
          " switch tabs to the `Render Queue`.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "Screenshot of menu button",
    },
    {
      type: "paragraph",
      text: "From there, choose your codec from the `Output Module`. For most lossless codecs, you " +
          "need to select the “Quicktime” format and find `Format Options`, then `Video Codec`. " +
          "After you’ve chosen the one you want, get back to the `Render Queue` and use the `Output " +
          "To` option to decide where to save it. Now you can hit `Render` in the top right.",
    },
    {
      type: "paragraph",
      text: "You have two options for a compressed format. The first is the easy one. Follow the " +
          "same steps as the lossless codec, but instead of “Quicktime”, choose “H.264”. In the same" +
          " `Format Options` menu, you can now adjust the `Target Bitrate`. This is a slider that " +
          "determines just how compressed your video will be. A larger number means a clearer video " +
          "at the cost of a larger file size. Inversely, lowering the number will decrease both size" +
          " and quality. The exact number will vary based on your video’s resolution. A bitrate of " +
          "15 Mbp/s will look great on 1080p video but not so good on 4K. Here’s a basic starting " +
          "point for bitrates.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "TABLE",
    },{
      type: "paragraph",
      text: "Once you have your `Target Bitrate` set, use the `Output To` option to decide where to " +
          "save your video and hit `Render` in the top right.",
    },
    {
      type: "paragraph",
      text: "The second option for compressed video is a little bit more complicated. Turns out, the" +
          " algorithm that AE uses for that H.264 render isn’t so good. By first exporting in " +
          "lossless and then compressing that result in another app like HandBrake (which is FREE) " +
          "will typically yield clearer results and smaller file sizes. I’d recommend finding " +
          "another guide on all the options within HandBrake, but I’ll give you a basic rundown. " +
          "Opening the app, find the lossless file you just made with AE. Then, open the video tab " +
          "and adjust the `RF` value under `Constant Quality`. Although the numbers are different, " +
          "it’s basically a backwards version of the `Target Bitrate`. In HandBrake, lower RF means " +
          "higher quality, higher means worse quality.",
    },
    {
      type: "image",
      // src: diagramOne,   // uncomment once you import a real image above
      alt: "TABLE",
    },
    {
      type: "paragraph",
      text: "After you’ve found a value, choose where to save it at the very bottom and hit the " +
          "green play button in the top left.",
    },
  ],
};

export default renderingContent;
