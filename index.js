require('babel-core/register')({
    presets: ['es2015', 'es2017', 'stage-0'],
    plugins: [
        ['transform-runtime', {
            'polyfill'   : false,
            'regenerator': true,
        }],
    ],
});

require('./app/server/app');
