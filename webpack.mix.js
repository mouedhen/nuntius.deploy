let mix = require('laravel-mix');
const LiveReloadPlugin = require('webpack-livereload-plugin');

mix
    .js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .copy('resources/assets/images', 'public/images')
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
