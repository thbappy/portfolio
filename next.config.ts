import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Comment out the line below if you want to deploy as a dynamic Node.js server using server.js
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
