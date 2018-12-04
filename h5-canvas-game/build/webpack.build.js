const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = Merge(CommonConfig, {
	mode: 'production',
	output: {
		publicPath: '/'
	},
	optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true
                    },
                    output: {
                        comments: false,
                        beautify: false
                    }
                }
            })
        ]
    },
	plugins: [
		new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '../src/index.html',
            inject: true
        }),
		// new BundleAnalyzerPlugin()
	]
})