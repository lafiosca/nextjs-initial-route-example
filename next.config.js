/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => ({
    fallback: [
      {
        source: '/:path*',
        destination: `http://localhost:4444/:path*`,
      },
    ],
  }),
}

module.exports = nextConfig
