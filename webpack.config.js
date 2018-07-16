const path = require('path');

module.exports = {
  context: __dirname,

  entry: './Django/noodle/static/index.js',

  output: {
    path: path.resolve('./Django/noodle/static/bundles/'),
    filename: 'bundles.js'
  },

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
