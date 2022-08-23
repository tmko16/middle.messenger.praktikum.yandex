const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
	entry: './src/index.ts',
	module: {
		rules: [{
			test: /\.ts$/i,
			use: 'ts-loader',
			exclude: ['/node_modules/', '/src/test/'],
		},
		{
			test: /\.less$/i,
			use: [
				// compiles Less to CSS
				'style-loader',
				'css-loader',
				'less-loader',
			],
		},
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			handlebars: 'handlebars/dist/handlebars.min.js',
		},
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'src/index.html',
	})],
	devServer: {
		hot: true,
		compress: true,
		port: 9000,
		historyApiFallback: true,
	},
	performance: {
		hints: false,
	},
};

module.exports = config;