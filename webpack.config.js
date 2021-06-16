const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  mode: "none", //打包文件默认不压缩
  entry: {
    'large-number':'./src/index.js',
    'large-number.min':'./src/index.js'
  },
  output: {
    filename: "[name].js",
    library: "largeNumber",
    libraryExport: "default",
    libraryTarget: "umd"
  },
  optimization: { //只压缩.mim.js文件
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include:/\.min\.js$/
      })
    ]
  }
}
