const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports={
    mode:'development',
    devServer: {
      static: './dist',
      compress: true
    },
    entry: "./src/client/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve("dist"),
      publicPath: "/",
    },
    module: {
        rules:[
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: "babel-loader"
          },
          {
            test: /\.html$/,
            use: "html-loader"
          },
          {
            test: /\.scss$/,
            use:[
              "style-loader",
              "css-loader",
              "sass-loader"
            ],
          },
        ], 
      }
    
}
