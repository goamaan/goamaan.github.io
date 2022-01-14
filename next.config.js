const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([
  [
    optimizedImages,
    {
      imagesPublicPath: '/amaan18.github.io/_next/static/images/'
    }
  ],
  {
    basePath: '/amaan18.github.io',
    assetPrefix: '/amaan18.github.io/'
  },
  withNextra()
])
