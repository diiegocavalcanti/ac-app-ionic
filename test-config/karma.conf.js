var webpackConfig = require('./webpack.test.js');

module.exports = function(config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            { pattern: './karma-test-shim.js', watched: true },
            './../src/pages/login/*.ts',
            './../src/pages/login/*.spec.ts'
        ],

        preprocessors: {
            './karma-test-shim.js': ['webpack', 'sourcemap']
        },
        
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        browserConsoleLogOptions: {
            level: 'log',
            format: '%b %T: %m',
            terminal: true
        },

        reporters: ['kjhtml', 'dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    };

    config.set(_config);
};