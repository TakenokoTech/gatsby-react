const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  // SASSの変換
  entry: {
    style: './src/sass/main.scss'
  },
  output: {
    path: path.join(__dirname, 'public/css'),
    filename: 'style.css'
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
    }]
  },
  plugins: [new ExtractTextPlugin('style.css')],
  postcss: [autoprefixer(), precss]
}, {

}];