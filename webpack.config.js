const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	target: 'web',
	mode: 'development',
	devtool: 'inline-source-map',
	externals: [nodeExternals()],
	entry: './src/index.ts',

	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: ['.ts', '.tsx', '.js'],
	},
	module: {
		rules: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{ test: /\.tsx?$/, loader: 'ts-loader' , exclude: /\.\/node_modules/ },
			{
				test: /\.less$/i,
				use: [
					// compiles Less to CSS
					'style-loader',
					'css-loader',
					'less-loader',
				],
				exclude: /\.\/node_modules/
			},
		],
	},
	devServer: {
		static: {
			directory: './dist',
		},
		compress: true,
		port: 9000,
	},
	plugins: [new HtmlWebpackPlugin()],
};