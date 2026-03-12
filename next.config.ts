import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '',
  assetPrefix: '/',
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
