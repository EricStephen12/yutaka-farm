/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'images.unsplash.com', 'plus.unsplash.com', 'tse2.mm.bing.net', 'tse3.mm.bing.net', 'tse4.mm.bing.net', 'i0.wp.com'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.mm.bing.net',
      },
      {
        protocol: 'https',
        hostname: '*.wp.com',
      }
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig; 