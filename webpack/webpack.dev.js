const webpack = require('webpack');

const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js',
  },
  devServer: {
    contentBase: commonPaths.outputPath,
    compress: true,
    hot: true,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({
      DEBUG: true,
      APP_STAGE: 'development',
    }),
  ],
};
