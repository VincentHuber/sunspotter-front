/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fonts.googleapis.com', 'google.com/maps'],
  },
};

module.exports = {
  optimizeFonts: false,
}