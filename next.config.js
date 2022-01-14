const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([
  [
    optimizedImages,
    {
      imagesPublicPath: '/_next/static/images/'
    }
  ],
  {
    basePath: '/',
    assetPrefix: '/',
    env
  },
  withNextra()
])
