module.exports = {
  transpileDependencies: ['common'],
  chainWebpack: config => {
    config.plugin('html')
      .tap((args) => {
        args[0].title = 'qiankun-admin-example'
        return args
      })
  },
  configureWebpack: {
    externals: {
      // vuetify: 'Vuetify',
      // vue2: 'Vue2',
      // moment: 'moment',
      // '@antv/g6': 'G6',
      // echarts: 'echarts
    }
  },
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port: 2750,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/api': {
        target: 'http://10.9.54.110:8000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "./src/assets/css/variables/variables.scss";'
      }
    }
  },
  lintOnSave: true
}
