import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  /* config options here */
  images: {
    unoptimized: true,

    remotePatterns: [
      new URL("https://fastporndelivery.hqporner.com/**"),
      new URL("https://www.babepedia.com/**"),
    ],
  },
};

export default nextConfig;
