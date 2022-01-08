const { name } = require('./package')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const dev = process.env.NODE_ENV === 'development'

module.exports = {
  transpileDependencies: ['common'],
  outputDir: 'dist',
  assetsDir: 'static',
  publicPath: dev ? '/' : '/subapp/sub-vue-cli4',
  filenameHashing: true,
  chainWebpack: (config) => {
    config.module
      .rule('fonts')
      .use('url-loader')
      .loader('url-loader')
      .options({})
      .end()
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .options({})
      .end()
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      // umd module
      // The name of the chunk, if set, otherwise the ID of the chunk
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port: 8010,
    overlay: {
      warnings: true,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  css: {
    loaderOptions: {
      sass: {}
    }
  },
  lintOnSave: true
}
