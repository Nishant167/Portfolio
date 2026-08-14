import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack ignores unrelated lockfiles above it.
  turbopack: {
    root: path.join(__dirname),
  },
  // Static export for GitHub Pages
  output: "export",
  basePath: "",
  trailingSlash: true,
};

export default nextConfig;
