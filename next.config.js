/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'pbs.twimg.com', // Twitter images
      'www.facebook.com', // Facebook images
      'instagram.fdac31-1.fna.fbcdn.net', // Instagram images
      'm.media-amazon.com', // Amazon images
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },
}

module.exports = nextConfig
