/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",                 // Enables static export
  images: {
    unoptimized: true,              // Required for GitHub Pages
  },
  basePath: "/Portfolio-MUI",       // Your repo name
  assetPrefix: "/Portfolio-MUI/",   // Your repo name
};

module.exports = nextConfig;
