const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/Portfolio-MUI" : "",
  assetPrefix: isProd ? "/Portfolio-MUI/" : "",
};

module.exports = nextConfig;
