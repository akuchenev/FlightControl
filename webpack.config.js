const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const outputDir = 'dist';
module.exports = (env, argv) => {
    const isDevMode = argv.mode === 'development';
    const mode = isDevMode ? 'development' : 'production';

    config = {

        entry: {
 //           pixi: './node_modules/pixi.js',
            app: './src/app.js',
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, outputDir),
        },
        mode: mode,
        devtool: isDevMode ? 'source-map' : '',
        // externals: [
        //     {"pixijs": "PIXI"},
        // ],
        devServer: {
            contentBase: path.join(__dirname, outputDir),
            compress: false,
            publicPath: '/',
            https: false,
            port: 3004,
            overlay: {
                warnings: true,
                errors: true
            }
        },



        plugins: [
            new HtmlWebpackPlugin({
                    hash: isDevMode,
                    title: 'FC',
                    minify: {
                        collapseWhitespace: !isDevMode,
                    },
                }
            ),
            new CopyPlugin([
                {from: 'assets', to: 'assets'},
            ]),]
    }
    return config;
};

