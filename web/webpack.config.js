var webpack = require('webpack');
var path = require('path');

var indexPath = path.resolve(__dirname, 'src/index.js');
var outputPath = path.resolve(__dirname, 'public');
module.exports = {
  entry: [
    indexPath
  ],
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ]
};
