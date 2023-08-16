require('dotenv').config(); 
// webpack.mix.js

let mix = require('laravel-mix');

// // set environment
// require('mix-env-file')
// mix.env(process.env.ENV_FILE);
console.log(process.env.NODE_ENV)

mix.setPublicPath('dist')
   .js('src/app.js', 'dist/app.js')
  //  .css('src/widget-styles.css', 'dist/widget-styles.css')


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