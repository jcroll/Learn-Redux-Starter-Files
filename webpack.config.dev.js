var path = require('path');
var webpack = require('webpack');

const PATHS = {
  client: path.join(__dirname, 'client'),
  static: path.join(__dirname, 'static')
};

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: PATHS.client,
  output: {
    path:PATHS.static,
    filename: 'bundle.js'
  },
  watchOptions: {
    poll: true
  },
  devServer: {
    contentBase: PATHS.static,
    stats: 'errors-only',
    colors: true,
    progress: true,
    host: '0.0.0.0',
    inline: true,
    hot: true,
    historyApiFallback: true
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015']
      },
      include: PATHS.client
    },
    // CSS
    { 
      test: /\.styl$/, 
      include: PATHS.client,
      loader: 'style-loader!css-loader!stylus-loader'
    }
    ]
  }
};
