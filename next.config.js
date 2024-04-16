/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fonts.google.com/'],
  },
};

module.exports = {
  optimizeFonts: false,
}