import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const webpack = require('webpack');
import type { Configuration } from 'webpack';
const config: Configuration = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
// Example of using webpack directly
const compiler = webpack(config);
compiler.run((err, stats) => {
  if (err) {
    console.error(err);
  } else {
    console.log(stats.toString());
  }
});
export default config;
