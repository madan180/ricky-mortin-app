const path = require("path");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Building a bundle for nodeJs
  target: "node",

  // Set mode
  mode: "development",

  // Entry file
  entry: "./src/index.js",

  // Output file information
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
