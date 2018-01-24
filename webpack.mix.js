let mix = require('laravel-mix');

mix
    .extract([
        'axios',
        'vue',
        'vue-router'
    ])
    .js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .disableNotifications();
