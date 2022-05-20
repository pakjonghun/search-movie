const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[contenthash].bundle.js',
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', 'json'],
    alias: {
      '@routers': path.join(__dirname, 'src', 'routers'),
      '@api': path.join(__dirname, 'src', 'api'),
      '@recoil': path.join(__dirname, 'src', 'recoil'),
      '@hooks': path.join(__dirname, 'src', 'hooks'),
      '@utils': path.join(__dirname, 'src', 'utils'),
      '@pages': path.join(__dirname, 'src', 'pages'),
      '@components': path.join(__dirname, 'src', 'components'),
      '@assets': path.join(__dirname, 'src', 'assets'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jpg/,
        type: 'asset/resource',
      },
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'src'),
      },
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
    // new Dotenv(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
};
