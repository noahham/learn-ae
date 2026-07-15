import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageTemplate from "./components/PageTemplate";
import Rendering from "./components/Rendering";

import gettingStartedContent from "./content/getting-started.jsx";
import layersContent from "./content/layers.jsx";
import shapesContent from "./content/shapes.jsx";
import effectsContent from "./content/effects.jsx";
import keyframesContent from "./content/keyframes.jsx";
import easingContent from "./content/easing.jsx";
import blendingContent from "./content/blending.jsx";
import renderingContent from "./content/rendering.jsx";

function App() {
  // Render routes inside a child that can access location. That lets us
  // scroll to top and force a remount (keyed by pathname) whenever the
  // route changes — behaving like a "refresh" for the newly navigated page.
  function AppRoutes() {
    const location = useLocation();

    // Scroll to top on navigation
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      // If you want a full-page reload instead of an SPA remount, uncomment:
      // window.location.reload();
    }, [location.pathname]);

    // Key the Routes by pathname so components inside will remount on navigation
    return (
      <Routes key={location.pathname}>
        <Route path="/getting-started" element={<PageTemplate {...gettingStartedContent} />} />
        <Route path="/layers" element={<PageTemplate {...layersContent} />} />
        <Route path="/shapes" element={<PageTemplate {...shapesContent} />} />
        <Route path="/effects" element={<PageTemplate {...effectsContent} />} />
        <Route path="/keyframes" element={<PageTemplate {...keyframesContent} />} />
        <Route path="/easing" element={<PageTemplate {...easingContent} />} />
        <Route path="/blending" element={<PageTemplate {...blendingContent} />} />
        <Route path="/rendering" element={<Rendering {...renderingContent} />} />

        {/* starting page */}
        <Route path="/" element={<Navigate to="/getting-started" replace />} />

        <Route path="*" element={<Navigate to="/keyframes" replace />} />
      </Routes>
    );
  }

  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;