const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distDir = path.resolve(__dirname, 'dist');
const srcDir = path.join(__dirname, 'src');

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

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            //include: srcDir,
            presets: ['flow', 'env'],
          }
        },
      },
    ],
  },
};