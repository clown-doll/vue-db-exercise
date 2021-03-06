/*
* @Author: Administrator
* @Date:   2016-07-14 09:02:03
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-22 15:59:27
*/

var webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    vue = require("vue-multi-loader"),
    path = require('path');

// 判断是否在生产环境
var isProduction = function() {
    return process.env.NODE_ENV === "production";
}


if(isProduction()){
    console.log("production...");
}else{
    console.log("develop...");
}


var config = {
    devtool: isProduction()?null:"source-map",
    debug: true,
    // 入口文件地址
    entry: [
        path.resolve(__dirname, "src/app.js")
    ],
    // 输出
    output: {
        filename: 'js/build.js',
        path: __dirname + '/dist',
        chunkFilename: "js/[name].chunk.js"
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
                    sass: ExtractTextPlugin.extract("style", "css!sass", {
                        publicPath: "../"
                    })
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                loader: "url-loader?limit=1024&name=fonts/[name].[ext]"
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                exclude: /node_modules/,
                loader: "url-loader?limit=1024&name=images/[name].[ext]"
            },
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/dist/,
                loader: "babel"
            }
        ]
    },
    babel: {
        presets: ["es2015"],
        plugins: ["transform-runtime"]
    },
    plugins: [
        // 自动生成html文件
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.tpl.html"
        }),
        // 使用 ProvidePlugin 加载使用率高的依赖库
        new webpack.ProvidePlugin({  
            $: "jquery",  
            jQuery: "jquery",  
            "window.jQuery": "jquery"  
        }),
        // 提公用js到vendor.js文件中
        new webpack.optimize.CommonsChunkPlugin("js/vendor.js"),
        // 独立样式
        new ExtractTextPlugin("css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]", {
            disable: false,
            allChunks: true
        }),
        // 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
        new webpack.optimize.DedupePlugin()
    ],
    // 服务器配置相关，自动刷新!
    devServer: {
        contentBase: 'dist'
    },
    externals: {
        "./src/libs/flexible.js": "window.flexible"
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extension: ['', '.js'],
    }
}


if (isProduction()) {  // 生产环境
    
    // 添加插件
    config.plugins.push(
        // 压缩代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );

} else {  // 开发环境

    //  开发环境下入口配置, 配合实现热替换
    config.entry.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

    // 添加插件
    config.plugins.push(
        // 配合entry配置，实现热替换
        new webpack.HotModuleReplacementPlugin()
    );

}


module.exports = config;