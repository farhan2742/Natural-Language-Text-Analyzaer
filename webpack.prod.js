const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');


module.exports = {
	output: {
		libraryTarget: 'var',
		library: 'Client'
	},
	mode: 'production',
	entry: './src/client/index.js',
	optimization: {
		minimizer: [
			new TerserPlugin({}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
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
			        MiniCssExtractPlugin.loader, 'css-loader', {
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
        new MiniCssExtractPlugin({ filename: '[name].css'}),
        new WorkboxPlugin.GenerateSW()
	]
}