const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { MODULE_RULES }=require('./webpack/base-config');

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
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "index.html"
        })
       ]
    
}
