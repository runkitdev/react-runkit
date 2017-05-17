const path = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'react-runkit.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'commonjs2'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	},
	externals: {
		react: 'commonjs react'
	}
}
