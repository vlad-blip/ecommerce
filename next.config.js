/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content1.rozetka.com.ua",
        port: "",
        pathname: "/goods/images/big/**",
      },
      {
        protocol: "https",
        hostname: "content.rozetka.com.ua",
        port: "",
        pathname: "/goods/images/big/**",
      },
      {
        protocol: "https",
        hostname: "content2.rozetka.com.ua",
        port: "",
        pathname: "/goods/images/big/**",
      },
    ],
  },
};
