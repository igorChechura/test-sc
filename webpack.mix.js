let mix = require('laravel-mix');

mix.copyDirectory('src/img', 'assets/img');

mix.js('src/js/main.js', 'assets/js/').sass('src/sass/main.scss', 'assets/css/').options({
    processCssUrls: false
});

mix.sourceMaps(false, 'source-map');

mix.minify(['assets/js/main.js', 'assets/css/main.css']);

mix.browserSync({
    proxy: 'test-sc.test',
    files: [
        'assets/css/main.min.css',
        'js/**/*.js',
        '**/*.html'
    ]
});

// mix.browserSync();

mix.disableSuccessNotifications();