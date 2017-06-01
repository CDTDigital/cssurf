'use strict';

const path              = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = {
  entry: './css.js',
  output: {
    path: path.resolve('./demo'),
    filename: 'cssurf.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [
            'css-loader',
            'sass-loader?includePaths[]=' + path.resolve(__dirname, "./node_modules/compass-mixins/lib")]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('cssurf.css')
  ]
};

module.exports = config;
