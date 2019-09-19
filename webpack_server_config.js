const path = require('path');

module.exports = {
  mode: "development",
  target: "node",
  entry: './server/index.js',
  output: {
    path: path.join(__dirname, 'server'),
    filename: 'index_server.js',
    libraryTarget: 'commonjs2'  // 添加此语句后, 打包后的文件才能抛出对象
  },
  module: {
    rules: [
      { test: [/\.jsx$/, /\.js$/], use: 'babel-loader' }
    ]
  },
  watch: true,
  

};