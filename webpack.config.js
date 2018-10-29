var webpack = require('webpack');
var path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'app/dist');
const APP_DIR = path.resolve(__dirname, 'app/src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'build.js'
  },
  module: {
    rules: [{
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images/'
          }
        }]
      }
    ]
  }
};

module.exports = config;