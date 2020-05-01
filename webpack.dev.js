const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	output: {
		libraryTarget: 'var',
		library: 'Client'
	},
	mode: 'development',
	entry: './src/client/index.js',
	module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
		        test: /\.js$/,
		        use: ["source-map-loader"],
		        enforce: "pre"
		    },
		    {
		        test: /\.scss$/,
		        use: [ 
			        'style-loader', 'css-loader', {
			            loader: 'sass-loader',
			            options: {
             				 // Prefer `dart-sass`
              				implementation: require('sass'),
        				},
					}
        		]
    		},
    	]
    },
	plugins: [
    	new HtmlWebPackPlugin({
	        template: "./src/client/views/index.html",
	        filename: "./index.html",
    	}),
    	new CleanWebpackPlugin({
                // Simulate the removal of files
                dry: true,
                // Write Logs to Console
                verbose: true,
                // Automatically remove all unused webpack assets on rebuild
                cleanStaleWebpackAssets: true,
                protectWebpackAssets: false
        }),
        new BundleAnalyzerPlugin({
        	analyzerMode: 'server',
        	analyzerPort: 'auto',
        	openAnalyzer: false,
        	generateStatsFile: true,
        })
	]
}