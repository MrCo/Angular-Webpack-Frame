/**
 * 插件配置
 * CodeBy:Mr.Co
 * Date:2018/3/13
 */
;(function (m,undefined) {
    'use strict';
    let webpack = require('webpack'),
        webpackHelper = require('./webpack.helper'),
        cleanWebpackPlugin = require('clean-webpack-plugin'),
        extractTextPlugin = require('extract-text-webpack-plugin'),
        copyPlugin = require('copy-webpack-plugin'),
        path = require('path'),
        plugins = [
            //分离css和js文件
            new extractTextPlugin({
                filename:(getPath) => {
                    let _path = getPath('css/[name]-[md5:contenthash:base26:10].css').replace('css/scripts/bootstrap/','skin/');
                  return _path;
                },
                allChunks:true
            }),
            //为组件分配ID,通过这个插件webpack可以分析和有限考虑使用最多的模块,并为他们分配最小的ID
            new webpack.optimize.OccurrenceOrderPlugin()
        ].concat(webpackHelper.getHtmlWebpackPlugins());

    //生产模式将压缩内容
    if(webpackHelper.config.isProduction()){
        plugins.push(new webpack.optimize.UglifyJsPlugin());
    }

    //删除之前构建的目录
    //注: webpack-dev-server也会执行webpack.config,避免打包好的又被删除
    if(process.argv[1].indexOf('webpack-dev-server') < 0){
        let _environment = webpackHelper.environmentDir();
        plugins.push(
            new cleanWebpackPlugin([_environment + '**/*.*', _environment + '**/**/*.*'],{
                root:path.resolve('./'),
                dry:false,
                verbose:true
            })
        );
    }

    //公共库打包
    plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            //抽取规则,如果某一个代码块,被两个地方调用,将会抽离到vendor中
            name:'scripts/common/vendor',
            //minchunks表示模块抽取的最小被调用次数，也就是说minchunks：10,那么这个chunk最少需要被调用10次，webpack才会把它当做一个公共模块抽取出来
            minChunks:2
        })
    );

    //Copy Fielder
    plugins.push(
        new copyPlugin([
            {
                from:'./src/widgets',
                to:'./scripts/widgets'
                //toType:''
            },
            {
                from:'./src/templates',
                to:'./templates/'
                //toType:''
            }
        ],{
            debug:'info'
        })
    )

    //排除不需要打包的业务中脚本
    // plugins.push(
    //     new webpack.IgnorePlugin(/jquyery.js$/)
    // )

    //全局变量设置
    // plugins.push(
    //     new webpack.ProvidePlugin({
    //         $:'jquery'
    //     })
    // );

    m.exports = plugins;
}(module));