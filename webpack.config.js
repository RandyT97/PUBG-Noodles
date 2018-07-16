const path = require('path');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: './Django/noodle/static/index.js',

  output: {
    path: path.resolve('./Django/noodle/static/bundles/'),
    filename: 'bundles.js'
  },

  plugins: [
    new BundleTracker({filename: './Django/webpack-stats.json'}),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};
