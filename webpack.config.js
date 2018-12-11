const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const distPath = path.resolve(__dirname, 'dist');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const tsconfigPath = path.resolve(__dirname, 'tsconfig.json');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const CleanWebpackPlugin = require('clean-webpack-plugin');
const srcPath = path.resolve(__dirname, 'src');

plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new MiniCssExtractPlugin({}),
];

plugins = devMode
    ? plugins.concat([
          new CleanWebpackPlugin(distPath),
          new webpack.LoaderOptionsPlugin({
              debug: true,
          }),
      ])
    : plugins.concat([new OptimizeCSSAssetsPlugin()]);

mode = devMode ? 'development' : 'production';
console.log(`Build ${mode}`);

module.exports = {
    mode: mode,
    entry: {
        polyfills: './src/polyfills.ts',
        app: './src/main.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: tsconfigPath,
                        },
                    },
                    'angular2-template-loader',
                    'angular2-router-loader',
                ],
                exclude: [/\.(spec|e2e)\.ts$/, /node_modules/, nodeModulesPath],
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
                exclude: [/node_modules/, nodeModulesPath],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        publicPath: '/',
        filename: '[name].js',
        path: distPath,
    },
    plugins: plugins,
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        minimizer: [
            new UglifyJsPlugin({
                extractComments: true,
            }),
        ],
    },
    devServer: {
        contentBase: distPath,
        port: 4200,
    },
};
