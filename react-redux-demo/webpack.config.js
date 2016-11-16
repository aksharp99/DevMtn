const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    publicPath: '/',
    fileName: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel?cacheDirectory'
      },
      {
        test: /\.css/,
        loaders: ['style','css']
      }
    ]
  }
}
