const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');
var HtmlWpbpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var path = require('path');
var baseUrl = require('./urlConfig');

module.exports = Merge(CommonConfig, {
    mode:'production',
    output:{
        path: path.resolve(__dirname, '../dist/[hash]')
    },
    optimization:{
        minimize:true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'SERVICE_URL':JSON.stringify(baseUrl.buildUrl)
        }),
        new HtmlWpbpackPlugin({
            filename: 'index.html',
            template: '../src/index.html',
            inject:true,
            minify: {
                removeComments: true,    // 移除html中的注释
                collapseWhitespace: true,  // 移除多余空格
                removeAttributeQuotes: true  // 移除多余引号
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            }
        }),
        new webpack.HashedModuleIdsPlugin()

    ]
})

