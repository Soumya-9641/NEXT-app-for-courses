/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.vmaker.com','media.geeksforgeeks.org','img.freepik.com','mdbcdn.b-cdn.net'],
  },
}

module.exports = nextConfig
