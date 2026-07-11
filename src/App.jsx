import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import PageTemplate from "./components/PageTemplate";

import gettingStartedContent from "./content/getting-started.js";
import layersContent from "./content/layers.js";
import shapesContent from "./content/shapes.js";
import effectsContent from "./content/effects.js";
import keyframesContent from "./content/keyframes";
import easingContent from "./content/easing";
import blendingContent from "./content/blending.js";
import renderingContent from "./content/rendering.js";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/getting-started" element={<PageTemplate {...gettingStartedContent} />} />
        <Route path="/layers" element={<PageTemplate {...layersContent} />} />
        <Route path="/shapes" element={<PageTemplate {...shapesContent} />} />
        <Route path="/effects" element={<PageTemplate {...effectsContent} />} />
        <Route path="/keyframes" element={<PageTemplate {...keyframesContent} />} />
        <Route path="/easing" element={<PageTemplate {...easingContent} />} />
        <Route path="/blending" element={<PageTemplate {...blendingContent} />} />
        <Route path="/rendering" element={<PageTemplate {...renderingContent} />} />

        {/* starting page */}
        <Route path="/" element={<Navigate to="/getting-started" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;