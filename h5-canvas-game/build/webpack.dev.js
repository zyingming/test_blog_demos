const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Merge(CommonConfig, {
	output: {
        publicPath: '/'
    },
	devServer: {
        compress: true,
        stats: {
            colors: true
        },
        port: '9595',
        historyApiFallback: true
    },
	plugins: [
		new HtmlWebpackPlugin({
			template: '../src/index.html',
			filename: 'index.html',
			inject: true
		})
	],
	devtool: 'cheap-source-map',
	mode: 'development'
})