/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint:{
    ignoreDuringBuilds: true
  },
  images: {
    domains: ["assets.suitdev.com", "suitmedia.com", "placehold.co", "picsum.photos"],
  },
  async rewrites() {
    return [
      {
        source: "/api/ideas/:path*",
        destination: "https://suitmedia-backend.suitdev.com/api/ideas/:path*",
      },
    ];
  },
};

module.exports = nextConfig;