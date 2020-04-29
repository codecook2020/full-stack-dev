let path = require('path')
// let webpack = require('webpack')
const DEMO = 'demo/';

//正常版本 混淆版本
module.exports = [
  {
    entry: {
      'sdk': ['./src/index.js']
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      library: 'mylog',
      libraryTarget: "umd"
    },
  },
  {
    entry: {
      'sdk.min': './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'demo'),
      filename: '[name].js',
      library: 'mylog',
      libraryTarget: "umd"
    },
    watch: true,
    devServer: {
      hot: true,
      contentBase: 'demo/',// DEMO_PATH,
      publicPath: DEMO, //指定资源文件引用的目录 
      // open: true
    }
    // plugins: [
    //   new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //       warnings: false
    //     },
    //     sourceMap: true
    //   })
    // ]
  }
]


// 参考UglifyJsPlugin 
// https://juejin.im/post/5a2a53b151882503dc539f41


