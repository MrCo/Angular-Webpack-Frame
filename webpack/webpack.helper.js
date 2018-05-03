/**
 * Webpack Helper
 * CodeBy:Mr.Co
 * Date:2018/03/13
 */
;(function (m,undefined) {
    'use strict';
   const fs = require('fs'),
       glob = require('glob'),
       path = require('path'),
       node_modules = path.resolve(__dirname,'node_modules'),
       htmlWebpackPlugin = require('html-webpack-plugin');

    let Helper = {
        /**
         *  相关配置
         * */
        config: {
            /**
             *html模板路径
             * */
            templateUrl: path.resolve('./src/templates/'),
            /**
             * 页面路径
             * */
            viewUrl: path.resolve('./src/views/'),
            /**
             * 组件路径
             * */
            componentUrl: path.resolve('./src/components/'),
            /**
             * 主引导路径
             * */
            bootstrapUrl: path.resolve('./src/bootstraps/'),
            /**
             * 控制器路径
             * */
            controllerUrl: path.resolve('./src/controllers'),
            /**
             * 脚本库路径
             * */
            scriptLibUrl: path.resolve('./src/libs/'),
            /**
             * 资源库路径
             * */
            assetsUrl: path.resolve('./src/assets/'),
            /**
             * 公共类库路径 + 名称
             * */
            scriptCoreName: '/libs/core.libs.js',
            /**
             * 是否为生产环境
             * */
            isProduction: function () {
                return process.env.NODE_ENV === 'production';
            },
            /**
             * 是否为开发热加载环境
             * */
            isHot:function () {
                return process.env.NODE_ENV === 'hot';
            },
            /**
             * 是否为开发环境
             * */
            isDev:function () {
                return process.env.NODE_ENV === 'dev';
            }
        },
        /**
         * 环境目录
         * */
        environmentDir:function () {
            switch (process.env.NODE_ENV){
                case 'dev':
                    return './dev/';
                case 'production':
                    return './release/';
                default:
                    return './dev/';
            }
        },
        /**
         * 获取多文件入口配置
         * */
        getEntrySetttings:function () {
            let _this = this,
                entry = {},
                scriptFolderName = 'scripts';


            //Html页面+Bootstrap引导
            glob.sync(`${_this.config.viewUrl}/*.html`).forEach(function (filePath) {
                let _fileName = path.basename(filePath,'.html');

                entry[`${scriptFolderName}/bootstrap/${_fileName}.main`] = `${_this.config.bootstrapUrl}/${_fileName}.main.js`;
            })

            //公共库
            entry[`${scriptFolderName}/libs/angular`] = ['./src/libs/angularjs/1.2.27/angular.js','./src/libs/angularjs/angular-ui-router.js'];

            return entry;
        },
        /**
         * 获取输出源配置
         * */
        getOutputSettings:function () {
            let _this = this;
            return {
                filename:'[name]-[hash:6].js',
                path:path.resolve('./',_this.environmentDir()),
                //如果src目录与打包目录不一致的时候需要单独配置
                //publicPath:'/pulbic/static',
                chunkFilename:'[name].js'
            }
        },
        /**
         * 获取HTML模板打包配置
         * */
        getHtmlWebpackPlugins:function () {
            let _this = this,
                plugins = [],
                scriptFolderName = 'scripts';

            glob.sync(`${_this.config.viewUrl}/*.html`).forEach(function (filePath) {
                let _fileName = path.basename(filePath),
                    _folderName = path.basename(filePath,'.html');

                plugins.push(new htmlWebpackPlugin({
                    filename:'views/' + _fileName,
                    template:'html-withimg-loader!' + path.resolve(filePath),
                    inject:'body',
                    hash:true,
                    chunks:[
                        //CommonsChunkPlugin配置项中的name,需保持一致
                        'scripts/common/vendor',
                        `${scriptFolderName}/libs/angular`,
                        `${scriptFolderName}/bootstrap/${_folderName}.main`
                    ],
                    //手动顺序
                    chunksSortMode:'manual'
                }));

            });

            return plugins;
        },
        /**
         * 获取当前环境打包类型
         * */
        getDevToolType:function () {
            let _this = this;
            return _this.config.isHot() || _this.config.isDev() ? 'inline-source-map' : _this.config.isProduction() ? 'cheap-module-source-map' : 'source-map';
        }
    }

    m.exports = Helper;
}(module));