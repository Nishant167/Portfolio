import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Repo is deployed as a GitHub Pages project site at /Portfolio/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/Portfolio/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
