
module.exports = {
  entry: "./ra.js",
  output: {
   filename:"./ra.min.js",
 },
module: {
  loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015']
      }
    }]
  }
}
