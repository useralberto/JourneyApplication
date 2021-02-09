let mix = require('laravel-mix');

mix.sass('src/scss/app.scss', 'web/css')
.js('src/js/app.js', 'web/js/deploy.js');