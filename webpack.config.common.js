const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].bundle.js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts", "json"],
    alias: {
      "@hooks": path.join(__dirname, "src", "hooks"),
      "@utils": path.join(__dirname, "src", "utils"),
      "@pages": path.join(__dirname, "src", "pages"),
      "@components": path.join(__dirname, "src", "components"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: "ts-loader",
        exclude: path.resolve(__dirname, "node_modules"),
        include: path.resolve(__dirname, "src"),
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.ProvidePlugin({
      react: "react",
    }),
  ],
};
