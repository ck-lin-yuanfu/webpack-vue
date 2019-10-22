
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');


function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: {
    index: './src/main.js'
  },
  plugins: [  
  new VueLoaderPlugin(),
  new HTMLWebpackPlugin({
      title: 'Code Splitting',
      template:path.join(__dirname, './index.html'),
      filename:'index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader'] }, 
      {test: /\.vue$/, use: 'vue-loader' }, 
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  resolve:{
    alias:{
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  }
};