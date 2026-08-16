import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/learn-ae/",
  plugins: [react(), svgr()],
  optimizeDeps: {
    exclude: ["update-browserslist-db", "browserslist"]
  },
  assetsInclude: ["**/*.aep"],
});