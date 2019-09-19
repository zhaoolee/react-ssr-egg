const path = require('path');

module.exports = {
  mode: "development",
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'app', 'public'),
    filename: 'index_client.js',
  },
  module: {
    rules: [
      { test: [/\.jsx$/, /\.js$/], use: 'babel-loader' }
    ]
  },
  watch: true,
  

};