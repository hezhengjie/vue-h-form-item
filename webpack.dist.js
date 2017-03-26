var webpack = require('webpack');

module.exports = {
  entry: './src/components/vue-h-form-item.vue',
  output: {
    path: "./dist",
    publicPath: "/dist/",
    filename: "vue-h-form-item.js",
    library: ["vueHFormItem"],
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
        'vue$': 'vue/dist/vue.common.js'
      }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.less$/,
        loader:"style!css!postcss!less"
      },
      {
        test: /\.css$/,
        loader:"style!css!postcss!less"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ["url?limit=1000"]
      }
    ]
  }
};
  module.exports.output.filename = "vue-h-form-item.min.js";
      module.exports.plugins = [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: false,
          compress: {
            warnings: false
          }
        })
      ];