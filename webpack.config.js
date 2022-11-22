const HTMLWebpackPlugin = require ('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin')
const path = require("path")

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'script.js',
      path: path.resolve(__dirname, "build"),
      publicPath: "./",
      assetModuleFilename: "images/[name][ext][query]"
  },
  plugins:[
    new HTMLWebpackPlugin(
      {
        template: './src/index.html'
      }
    ),
    new MiniCSSExtractPlugin(),
  ],
  optimization: {
    minimizer: [
      new CSSMinimizerPlugin(),
    ],
  },
  
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      }
    ]
  }
}
  