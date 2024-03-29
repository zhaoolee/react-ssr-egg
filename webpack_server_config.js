const path = require('path');

module.exports = {
  mode: "development",
  target: "node",
  entry: './app/server/index.js',
  output: {
    path: path.join(__dirname, 'app', 'server'),
    filename: 'index_server.js',
    libraryTarget: 'commonjs2'  // 添加此语句后, 打包后的文件才能抛出对象
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/, /\.js$/],
        use: "babel-loader"
      },
      {
        test: [/\.css$/],
        use: [
          "isomorphic-style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              localsConvention: 'camelCase'
            }
          }
        ]
      },
      {
        test: [/\.png$/, /\.jpeg$/, /\.jpg$/, /\.svg$/, /\.gif$/],
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 9000,
              publicPath: "/"
            }
          }
        ]
      }
    ]
  },
};