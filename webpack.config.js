/**
 * Webpack config配置
 * CodeBy:Mr.Co
 * Date:2018/3/13.
 */
;(function (m) {
    'use strict';
    const webpackHelper = require('./webpack/webpack.helper'),
        plugins = require('./webpack/webpack.plugins'),
        rules = require('./webpack/webpack.rules'),
        hotServer = require('./webpack/webpack.hotserver'),
        resolve = require('./webpack/webpack.resolve'),
        path = require('path');

    const settings = {
        entry: webpackHelper.getEntrySetttings(),
        output: webpackHelper.getOutputSettings(),
        devServer: hotServer,
        plugins:plugins,
        module: {
            rules: rules
        }
        //devtool: webpackHelper.getDevToolType(),

        // module: {
        //     rules: rules
        // },
        //plugins: plugins,
        //resolve: resolve
    }

    m.exports = settings;
}(module));