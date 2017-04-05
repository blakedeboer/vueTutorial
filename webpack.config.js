var path = require('path');

module.exports = {
	entry: './app/main',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},

	//We add this so that we use the full version and not the runtime-only version which 
	//is used by default
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},


	module: {
		loaders: [
			//We add this so that babel transpiles all the js files from ES6 to ES5
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};