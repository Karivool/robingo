let webpack = require("webpack");
let path = require("path");

let DEV = path.resolve(__dirname, "dev");
let OUTPUT = path.resolve(__dirname, "output");

let config = {
  entry: DEV + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "bingoCard.js"
  },
  module: {
    loaders: [{
        include: DEV,
        loader: "babel",
    }]
  }
};

module.exports = config;
