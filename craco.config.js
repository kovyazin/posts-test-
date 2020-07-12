const cracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        aliases: {
          '@': './src',
          '@features': './src/features',
          '@ui': './src/ui',
          '@api': './src/api',
          '@lib': './src/lib',
          '@pages': './src/pages'
        }
      }
    }
  ]
}