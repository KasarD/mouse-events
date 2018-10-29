var path = require('path'),
    webpack = require('webpack'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    cleanWebpackPlugin = require('clean-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")


var webroot = "./static/dist",
    styles = "./static/css",
    scripts = "./static/js/";

var paths = {
    app: scripts + "app.js",
    bundle: webroot
};

module.exports = (env) => {
    var isDevBuild = !(env && env.production);

    var cfg = {
        entry: {
            app: paths.app
        },
        output: {
            filename: '[name].js',
            path: path.join(__dirname, paths.bundle)
        },
        devtool: isDevBuild ? "inline-source-map" : false,
        resolve: {
            extensions: ['.html', '.js', '.css', '.scss'],
            alias: {
                "modules": path.join(__dirname, "node_modules"),
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                },
                {
                    test: /\.(scss|css)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                minimize: !isDevBuild
                            }
                        },
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    },
                    commons: {
                        test: /[\\/]Portal.Energomash.Commons[\\/]/,
                        name: 'commons',
                        chunks: 'all'
                    }
                }
            },
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    extractComments: true,
                    parallel: true,
                    sourceMap: true
                }),
                new OptimizeCssAssetsPlugin({
                })
            ]
        },
        plugins: [
            new cleanWebpackPlugin([paths.bundle]),
            new webpack.NoEmitOnErrorsPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].css"
            })
        ]
    };
    return cfg;
};
