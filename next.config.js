/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "live.staticflickr.com",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
  env: {
    API_KEY: '06fe421ea76dcc08939e8e4202b4d933',
  },
};

module.exports = nextConfig;
