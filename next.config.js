const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

const ghPages = process.env.DEPLOY_TARGET === 'gh-pages'

module.exports = withPlugins([
  [
    optimizedImages(),
    {
      images: {
        loader: 'custom',
        disableStaticImages: true
      }
    }
  ],
  {
    basePath: ghPages ? '/amaan18.github.io' : '',
    assetPrefix: ghPages ? '/amaan18.github.io/' : ''
  },
  withNextra()
])
