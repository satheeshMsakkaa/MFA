const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: 'auto',
    uniqueName: 'scm',
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'scm',
      library: {
        type: 'module',
      },
      filename: 'remoteEntry.js',
      exposes: {
        './Module': 'src/app/home.module.ts',
      },
       shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
};