const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const webpack = require("webpack");
const path = require("path");

const devConfig = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  optimization: {
    usedExports: true,
  },
};
module.exports = merge(commonConfig, devConfig);
