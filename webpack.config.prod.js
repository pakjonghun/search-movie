const Dotenv = require('dotenv-webpack');
const path = require('path');
const MiniCssExtracePlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.config.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: [MiniCssExtracePlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MiniCssExtracePlugin({
      filename: '[name].[contenthash].css',
    }),
    new Dotenv(),
  ],
});
