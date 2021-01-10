const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath:'/',
    filename: '[name].bundle.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './src'),
    open: true,
    compress: true,
    disableHostCheck: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo App',
      template: path.resolve(__dirname, './src/public/template.html'), // template file
      filename: 'index.html', // output file
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {test: /\.css$/, exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
         },
         {
            loader: 'css-loader',
            options: {
               modules: true
            }
         }
        ]
      },
      {test: /\.css$/, include: /node_modules/,
        use: ['style-loader','css-loader']
      },
      {test: /\.(png|svg|jpg|gif|ico|jpeg)$/, exclude: /node_modules/,
        use: ['file-loader']
      }
    ]
  }
};