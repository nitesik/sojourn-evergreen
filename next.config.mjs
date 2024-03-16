/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.inc.com" }],
  },
  reactStrictMode: true,
};

export default nextConfig;
