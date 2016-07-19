/*
* @Author: Administrator
* @Date:   2016-07-14 09:02:03
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-19 16:24:28
*/

var webpack = require("webpack"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    vue = require("vue-multi-loader"),
    path = require('path');




module.exports = {
    // 入口文件地址
    entry: [
        "webpack-dev-server/client?http://localhost:8080/",
        "webpack/hot/dev-server",
        path.resolve(__dirname, 'src/app.js')
    ],
    /*entry: {
        app: [
            "webpack-dev-server/client?http://localhost:8080/",
            "webpack/hot/dev-server",
            path.resolve(__dirname, 'src/app.js')
        ]
        // ,
        // vendor: __dirname + '/src/vendor'  
    },*/
    // 输出
    output: {
        filename: 'js/build.js',
        path: __dirname + '/dist'
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
    }/*,
    babel: {
        presets: ["es2015", "stage-0"],
        plugins: ["transform-runtime"]
    }*/,
    plugins: [
        new webpack.ProvidePlugin({  
            $: "jquery",  
            jQuery: "jquery",  
            "window.jQuery": "jquery"  
        }), 
        /*new webpack.optimize.CommonsChunkPlugin({
            name: "js/vendor.js",
            minChunks : 2  
        }),*/
        new webpack.optimize.CommonsChunkPlugin("js/vendor.js"),
        new ExtractTextPlugin("css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]", {
                disable: false,
                allChunks: true
            }),
        new webpack.optimize.DedupePlugin(),  
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
    },
    externals: {
        "./src/libs/flexible.js": "window.flexible"
    }
}