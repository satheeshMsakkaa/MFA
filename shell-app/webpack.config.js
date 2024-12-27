const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: 'auto',
    uniqueName: 'shell',
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      library: {
        type: 'module',
      },
      remotes: {
        scm: 'http://localhost:4201/remoteEntry.js',
      },
       shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
};