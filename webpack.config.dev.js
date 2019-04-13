import settings from "./settings";

const path = require("path");

module.exports = {

	// TODO: There should be a function to automatically generate entry points
	entry: {
		pageOne: "./src/pages/index/index.js",
		pageTwo: "./src/pages/error/error.js",
		pageThree: "./src/pages/content/content.js",
	},

	output: {
		path: path.resolve(__dirname, settings.build_folder),
		filename: "[name].js"
	},

	module: {
		rules: [
			// js (eslint)
			// TODO: need settings for eslint
			{
				test: /\.js$/,
				enforce: "pre",
				exclude: /node_modules/,
				use: [
					{
						loader: "eslint-loader"
					}
				]
			},
			// js (babel)
			// TODO: need settings for babel (config include?)
			// TODO: need sourcemaps (only for dev)
			{
				test: /\.js$/,
				enforce: "pre",
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader"
					}
				]
			},

			// css
			// TODO: need settings
			// TODO: need sourcemaps (only for dev)
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							modules: true
						}
					},
					{
						loader: "postcss-loader"
					}
				]
			},

			// scss
			// TODO: need settings
			// TODO: need sourcemaps (only for dev)
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							modules: true
						}
					},
					{
						loader: "postcss-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			},

			// pug
			{
				test: /\.pug$/,
				use: [
					// TODO: Pug => HTML
				]
			},

			// images (not min)
			// TODO: need settings
			{
				test: /\.(gif|png|jpe?g|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {}
					},
					{
						loader: "url-loader",
						options: {}
					}
				]
			},

			// images (min)
			// TODO: need settings
			// TODO: need min
			{
				test: /\.(gif|png|jpe?g|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {}
					},
					{
						loader: "url-loader",
						options: {}
					}
				]
			},

			// fonts
			// TODO: need settings
			// TODO: url-loader?
			{
				test: /\.(woff2?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: "file-loader"
					}
				]
			},

			// video / audio
			// TODO: need settings
			{
				test: /\.(ogg|mp3|wav|mpe?g)$/i,
				use: [
					{
						loader: "file-loader"
					},
					{
						loader: "url-loader",
						options: {}
					}
				]
			},
		]
	},

	plugins: [],

	// TODO: need settings
	// TODO: minimal optimization for dev mode
	optimization: {
		minimize: false
	},

	// TODO: need settings
	devtool: [],

	watchOptions: {
		aggregateTimeout: 500,
		poll: 10000,
		ignored: /node_modules/
	},

	// TODO: need settings
	performance: {},

	// TODO: need settings
	devServer: {
		contentBase: path.join(__dirname, settings.build_folder),
		compress: true,
		port: 8080
	},

	// TODO: "normal" or "minimal" for production
	stats: "verbose",

	// TODO: include https://webpack.github.io/analyse/

	externals: {
		jquery: "jQuery"
	},

	recordsInputPath: path.join(__dirname, "recordsInput.json"),
	recordsOutputPath: path.join(__dirname, "recordsOutput.json")
};
