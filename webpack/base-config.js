 const MODULE_RULES=[
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
    }
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
  ];
  module.exports={MODULE_RULES};