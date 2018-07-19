var MiniCssExtractPlugin = require("mini-css-extract-plugin");
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

var path = require('path');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

var webpackConfig = {
	context: path.resolve(__dirname, '../src'),
	entry: {
		index: './main.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist/'),
		filename: 'js/[name].[hash].js',
		publicPath: '/assets/' // 出口chunk路径
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',  // 问题3
			'@': path.join(__dirname, '..', 'src')
		}
	},
	module: {
		rules: [{
			test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                extractCSS: true
            }
		},{
			test: /\.js$/,
			loader: 'babel-loader',
			include: [path.resolve(__dirname, '../src')]
		}, {
            test: /\.(?:jpg|gif|png|svg|jpeg)$/,
            loader: 'url-loader?limit=10000&name=' + path.posix.join('assets', 'images/[name].[hash].[ext]')
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader?name=[name].[hash].[ext]&publicPath=../../&outputPath=assets/fonts/'
            }],
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader?name=[name].[hash].[ext]&publicPath=../../&outputPath=assets/fonts/'
            }],
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader?name=[name].[hash].[ext]&publicPath=../../&outputPath=assets/fonts/'
            }],
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'file-loader?name=[name].[hash].[ext]&publicPath=../../&outputPath=assets/fonts/',
            }],
        }]
	},
	optimization:{
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
		new MiniCssExtractPlugin({
			filename: './assets/css/[name].[hash].css'
		}),
		new VueLoaderPlugin()  // 问题4
	]
}

module.exports = webpackConfig;