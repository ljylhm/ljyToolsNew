const path = require("path");
const webpack = require('webpack');
// 可视化工具
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
console.log(path.resolve(__dirname, "dist"))
module.exports = {
    entry: {
        "main": "./out/main.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        publicPath: "./dist",
        library: "[ljy_tools]", // 类库的名字
        libraryExport: "default",
        globalObject: 'this', // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
        libraryTarget: 'umd' // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
    },
    devtool: "inline-source-map",
    resolve: {
        modules: ['./../', 'node_modules'],
        extensions: ['.js', '.json'],
        alias: {
            "@components": path.resolve(__dirname, './components'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // ProvidePlugin 可以将模块作为一个变量，被webpack在其他每个模块中引用。只有你需要使用此变量的时候，这个模块才会被 require 进来。
        new webpack.ProvidePlugin({
            _: ['test']
        }),
        // new BundleAnalyzerPlugin()
    ]
}