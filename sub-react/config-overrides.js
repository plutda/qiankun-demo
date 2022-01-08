const path = require('path');
const { name } = require('./package.json');
const dev = process.env.NODE_ENV === 'development'

module.exports = {
  webpack: function override(config, env) {
    config.entry = config.entry.filter(
      (e) => !e.includes('webpackHotDevClient')
    );
    config.output.publicPath = dev ? `/` : `/subapp/sub-react`,
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    // config.output.globalObject = 'window';
    return config;
  },
  paths: function(paths, env) {
    paths.appBuild = path.resolve(__dirname, 'dist');
    return paths;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.port = 8020;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      // config.historyApiFallback = true;
      // config.watchContentBase = false;
      // config.liveReload = false;
      // Return your customised Webpack Development Server config.
      return config;
    };
  },
};
