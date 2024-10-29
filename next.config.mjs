/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  transpilePackages: [
    "next",
    "react",
    "react-dom",
    "swr",
    "react-error-boundary",
  ],
};

export default nextConfig;
