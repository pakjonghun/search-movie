const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const Dotenv = require('dotenv-webpack');

module.exports = merge(commonConfig, {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },

      // {
      //   test: /\.js$/,
      //   enforce: 'pre',
      //   loader: 'source-map-loader',
      // },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new Dotenv(),
    // new BundleAnalyzerPlugin(),
  ],
});
