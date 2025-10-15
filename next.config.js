/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'localhost', 
      'api.millionluxury.com', 
      'example.com', 
      'via.placeholder.com',
      'i.pinimg.com',
      'images.unsplash.com',
      'picsum.photos'
    ],
    formats: ['image/webp', 'image/avif'],
  },
  compiler: {
    styledComponents: true,
  },
  // Disable build traces to avoid stack overflow
  experimental: {
    buildTrace: false,
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;
