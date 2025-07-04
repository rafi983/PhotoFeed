/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'source.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'i.pravatar.cc',
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos',
          },
          {
            protocol: 'https',
            hostname: 'api.dicebear.com',
          },
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        unoptimized: false,
        minimumCacheTTL: 60,
        formats: ['image/webp', 'image/avif'],
      },
};

export default nextConfig;
