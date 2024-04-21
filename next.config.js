/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagsapi.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  // trailingSlash: true,
  // output: "export",
};

module.exports = nextConfig;
