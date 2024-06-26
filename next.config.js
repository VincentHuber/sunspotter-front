/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fonts.googleapis.com', 'google.com/maps', 'fonts.gstatic.com'],
  },
};

module.exports = nextConfig