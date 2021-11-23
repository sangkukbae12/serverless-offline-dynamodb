const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: 'development',
  devtool: 'source-map',
  stats: 'minimal',
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { 'targets': { 'esmodules': true }}]
            ]
          }
        }
      }
    ]
  }
}
