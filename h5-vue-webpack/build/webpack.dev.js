const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');
const webpack = require('webpack');
var HtmlWpbpackPlugin = require('html-webpack-plugin');
var baseUrl = require('./urlConfig');


module.exports = Merge(CommonConfig, {
    mode: 'development',
    devServer: {
        compress: true,
        stats: {
            colors: true
        },
        port: '8001',
        historyApiFallback: true,
        publicPath: CommonConfig.output.publicPath,
        host: "172.23.170.66"
    },
    plugins: [
        new webpack.DefinePlugin({
            'SERVICE_URL': JSON.stringify(baseUrl.devUrl)
        }),
        new HtmlWpbpackPlugin({
            filename: 'index.html',
            template: '../src/index.html',
            inject: true
        })
    ],
    devtool: 'cheap-source-map'
})