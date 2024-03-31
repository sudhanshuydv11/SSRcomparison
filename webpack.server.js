const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const nodeExternals = require('webpack-node-externals');
const { MODULE_RULES }=require('./webpack/base-config');

module.exports={
    mode:'development',
    target: 'node',
    externals: [nodeExternals()], 
    externalsPresets: {
        node: true 
    },
    entry: "./src/server/server.js",
    output: {
      filename: "server-bundle.js",
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
      }
    
}
