const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const distPath = path.resolve(__dirname, 'dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const tsconfigPath = path.resolve(__dirname, 'tsconfig.json');

module.exports = {
    mode: 'development',
    entry: {
        polyfills: './src/polyfills.ts',
        app: './src/main.ts',
        styles: './src/styles.less',
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
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader'],
                }),
                exclude: [/node_modules/, nodeModulesPath],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.less'],
    },
    output: {
        publicPath: '/',
        filename: '[name].[hash].js',
        path: distPath,
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ExtractTextPlugin('styles.css'),
    ],
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
