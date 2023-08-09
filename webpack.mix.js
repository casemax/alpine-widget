// webpack.mix.js

let mix = require('laravel-mix');

// mix.js('src/app.js', 'dist').setPublicPath('dist');
mix.js('src/app.js', 'dist/app.js').setPublicPath('dist');

// Setup HTML-Loader to allow us to import HTML templates
mix.webpackConfig({
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader'
        }
      ]
    }
  });