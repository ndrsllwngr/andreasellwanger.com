const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
};

module.exports = withContentlayer(nextConfig);
