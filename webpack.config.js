/* eslint-disable */
// https://webpack.github.io/docs/configuration.html
module.exports = {
  target: 'node', // https://webpack.github.io/docs/configuration.html#target
  entry: {
    app: ['./src/index.js']
  },
  output: {
    filename: 'index.js',
    path: __dirname,
    libraryTarget: 'commonjs2' // https://webpack.github.io/docs/configuration.html#output-librarytarget
  },
  modules: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
