/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable React Strict Mode to prevent double rendering
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
  // Code splitting configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  // Caching headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=300, s-maxage=300',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
