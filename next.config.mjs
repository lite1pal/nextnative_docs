import nextra from "nextra";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
  // Optional: Change the output directory `out` -> `dist`
  // distDir: "build"
  basePath: '/docs',         
  trailingSlash: false,
  assetPrefix: 'https://nextnative.dev',
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra(nextConfig);
