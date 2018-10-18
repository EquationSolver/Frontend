// webpack.config.js
var webpack = require('webpack');
module.exports = {
  entry: {
    entry: __dirname + '/main.js'
  },
  output: {
    filename: '[name].bundle.js'
  }
};
