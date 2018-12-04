const webpack = require('webpack');
const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin')

module.exports = {
	context: path.resolve(__dirname, '../src'),
	entry: {
		index: './main.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist/'),
		filename: 'js/[name].[hash].js'
	},
	resolve: {
		extensions: [".js", ".json",".css"],
		alias: {
			'@': path.join(__dirname, '..', 'src')
		}
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: 'babel-loader',
            include: [path.resolve(__dirname, '../src')]
		},{
			test: /\.(css|less)$/,
			use: [ExtractCssChunks.loader, {
				loader: 'css-loader',
				options: {
					importLoaders: 1
				}
			},'less-loader']
		}, {
            test: /\.(?:jpg|gif|png|svg|jpeg)$/,
            use: [{
	            loader: 'url-loader',
		        options: {
			        limit: 10000,
			        name: path.posix.join('assets', 'images/[name].[hash].[ext]')
		        }
            }]
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader?name=[name].[hash].[ext]&publicPath=../../&outputPath=assets/fonts/'
            }]
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader?name=[name].[hash].[ext]&publicPath=../../&outputPath=assets/fonts/'
            }]
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader?name=[name].[hash].[ext]&publicPath=../../&outputPath=assets/fonts/'
            }]
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader?name=[name].[hash].[ext]&publicPath=../../&outputPath=assets/fonts/',
            }]
        }]
	},
	optimization: {
		// 分离chunk
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
	plugins: [
		new ExtractCssChunks({
			filename: "assets/css/[name].[hash].css",
			chunkFilename: "assets/css/[name].[hash].css",
			hot: true,
		})
	]
}