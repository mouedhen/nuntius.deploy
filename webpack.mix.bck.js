const mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');

mix
    .copy('resources/assets/images', 'public/images')
    .extract([
        'axios',
        'element-ui',
        'vue',
        'vue-router'
    ])
    .js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .webpackConfig({
        plugins: [
            new LiveReloadPlugin(),
        ]
    })
    .disableNotifications();
