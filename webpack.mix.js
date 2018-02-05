let mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .extract([
        '@turf/turf',
        'axios',
        'chart.js',
        'element-ui',
        'moment',
        'moment-duration-format',
        'moment-timezone',
        'tiny-cookie',
        'vue',
        'vue-chartjs',
        'vue-data-tables',
        'vue-resource',
        'vue-router',
        'vuex',
    ])
    .webpackConfig({
        plugins: [
            new LiveReloadPlugin(),
        ]
    })
    .disableNotifications();
