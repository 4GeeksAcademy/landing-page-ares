const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const port = 3000;
let publicUrl = `ws://localhost:${port}/ws`;
//only for gitpod
if(process.env.GITPOD_WORKSPACE_URL){
  const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://');
  publicUrl = `wss://${port}-${host}/ws`;
}
//only for codespaces
if(process.env.CODESPACE_NAME){
  publicUrl = `wss://${process.env.CODESPACE_NAME}-${port}.app.github.dev/ws`;
}

module.exports = {
  entry: [
    './src/js/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(css)$/,
          use: [
              "style-loader", // creates style nodes from JS strings
              "css-loader" // translates CSS into CommonJS
          ]
        },
        // Regla para archivos SCSS
        {
          test: /\.scss$/,
          use: [
              "style-loader", // injects CSS into the DOM by injecting a `<style>` tag
              "css-loader",   // interprets `@import` and `url()` like `import/require()` and will resolve them
              "sass-loader"  // compiles Sass to CSS
          ]
        },
        { 
          test: /\.(png|svg|jpg|gif)$/, 
          use: {
            loader: 'file-loader',
            options: { name: '[name].[ext]' } 
          }
        }, // for images
        { 
          test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, 
          use: ['file-loader'] 
        } // for fonts
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss']
  },
  devtool: "source-map",
  devServer: {
    port,
    hot: true,
    allowedHosts: "all",
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    client: {
      webSocketURL: publicUrl
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new ESLintPlugin({
    //   files: path.resolve(__dirname, "src"),
    // }),
    new HtmlWebpackPlugin({
        favicon: '4geeks.ico',
        template: 'template.html'
    }),
    // Asegúrate de comentar o eliminar ErrorOverlayPlugin si no lo estás usando
    // new ErrorOverlayPlugin(),
  ]
};
