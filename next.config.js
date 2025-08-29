/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/nuestro-pulso-app' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nuestro-pulso-app/' : '',
}

module.exports = nextConfig