let mix = require('laravel-mix');
require('laravel-mix-purgecss');

mix
.js('src/js/app.js', 'web/js')
.sass('src/scss/app.scss', 'web/css');

mix.purgeCss({
  content: ['**/*.twig'],
  whitelistPatterns: [
    /headroom/,
    /collapsing/,
    /show/,
    /tooltip*/,
    /popover/,
  ]
});
