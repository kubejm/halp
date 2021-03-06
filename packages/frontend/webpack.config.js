const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { EnvironmentPlugin } = require('webpack');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const sockPort = process.env.DEV_SOCK_PORT;

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'none' : 'inline-source-map',
  entry: './src/index.tsx',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              rootMode: 'upward',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new EnvironmentPlugin({
      NODE_ENV: 'development',
    }),
  ],
  devServer: {
    hot: true,
    compress: true,
    disableHostCheck: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    sockPort,
  },
};
