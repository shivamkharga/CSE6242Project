const path = require('path')

module.exports = {
  // lintOnSave: process.env.NODE_ENV !== 'production',
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src/'))
    config.plugin('html').tap((args) => {
      // eslint-disable-next-line no-param-reassign
      args[0].title = "Procrastinator's Recipe Recommendations"
      return args
    })
  },

  transpileDependencies: ['vuetify'],
}
