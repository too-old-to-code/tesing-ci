/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone'
};


module.exports = {
  ...nextConfig,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
};
