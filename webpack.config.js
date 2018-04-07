const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distDir = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  
  mode: 'development',

  output: {
    filename: 'bundle.js',
    path: distDir,
    publicPath: '/',
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: distDir,
    port: 9988,
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
};