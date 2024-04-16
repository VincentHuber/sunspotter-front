/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fonts.google.com/', 'google.com/maps'],
  },
};

module.exports = {
  optimizeFonts: false,
}