/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,
      domains: ['images.unsplash.com'],  // Add this line
    },
    output: 'export',
    trailingSlash: true,
  }
  
  module.exports = nextConfig