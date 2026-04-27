import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    // Allow local images from public folder (default behavior)
    // Add external domains here if needed
  },
};

export default nextConfig;
