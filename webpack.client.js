const path = require("path");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  // Set mode
  mode: "development",

  // Entry file
  entry: "./src/client/client.js",

  // Output file information
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = merge(baseConfig, config);


