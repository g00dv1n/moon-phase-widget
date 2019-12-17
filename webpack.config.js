const path = require('path');
const webpack = require('webpack');

const isEnvProduction = process.env.NODE_ENV === 'production';

const webpackConfig = {
  mode: isEnvProduction ? 'production' : 'development',
  entry: './src/index.js',
  devtool: isEnvProduction ? 'none' : 'eval-source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    library: 'MyLibrary',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        use: ['url-loader'],
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'DEV_URL': JSON.stringify(process.env.DEV_URL || false)
    }),
  ]
};

if (isEnvProduction) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css)$/,
      minRatio: 0.8
    })
  )
}

module.exports = webpackConfig;