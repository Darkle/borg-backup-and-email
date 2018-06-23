const path = require('path')

const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const projectDir = path.resolve(__dirname)
const entryFile = path.join(projectDir, 'index.lsc')
const ISDEV = (process.env.NODE_ENV && process.env.NODE_ENV !== 'production')

console.log('ISDEV: ', ISDEV)
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

/*****
* We dont want webpack to include polyfills or mocks for various node stuff, which we set with
* the 'node' key https://webpack.js.org/configuration/node/
* We also dont want webpack to transpile the stuff in node_modules folder, so we use the
* webpack-node-externals plugin.
*/
const webpackconfig = {
  mode: process.env.NODE_ENV,
  devtool: ISDEV ? 'eval-source-map' : 'none',
  context: projectDir,
  module: {
    rules: [
      {
        test: /.lsc/,
        exclude: [
          /(node_modules)/
        ],
        loader: 'babel-loader',
        options: {
          sourceMap: ISDEV
        }
      },
    ]
  },
  resolve: {
    extensions: ['.lsc', '.js']
  },
  plugins: [
    // Gonna still use DefinePlugin as its a bit shorter than using global.ISDEV.
    new webpack.DefinePlugin({ ISDEV })
  ],
  target: 'node',
  entry: entryFile,
  output: {
    filename: 'index-compiled.js',
    path: projectDir
  },
  externals: [nodeExternals()],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false
  }
}


module.exports = webpackconfig
