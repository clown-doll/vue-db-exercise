/*
* @Author: Administrator
* @Date:   2016-07-14 09:02:03
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-14 18:00:34
*/

var webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    vue = require("vue-multi-loader"),
    path = require('path');



module.exports = {
    // 入口文件地址
    entry: [
        "webpack-dev-server/client?http://localhost:8080/",
        "webpack/hot/only-dev-server",
        "./src/app.js"
    ],
    // 输出
    output: {
        filename: 'js/build.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 加载器
    module: {
        // 加载器
        loaders: [
            // 解析.vue文件
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: vue.withLoaders({
                    sass: ExtractTextPlugin.extract("css!sass")
                })
            },
            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&mimetype=application/font-woff" 
            },
            { 
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: "file-loader" 
            },
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/dist/,
                loader: "babel"
            }
        ]
    }/*,
    babel: {
        presets: ["es2015", "stage-0"],
        plugins: ["transform-runtime"]
    }*/,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('js/common.js'),
        new ExtractTextPlugin("css/style.css", {
                allChunks: true
            }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
    ],
    devtool: '#source-map',
    // 服务器配置相关，自动刷新!
    devServer: {
        contentBase: 'dist'
    }
}