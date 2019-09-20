const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "app", "public"),
    filename: "index_client.js"
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
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              localsConvention: 'camelCase',
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
  watch: true
};
