const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const outputDir = 'dist';
module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, outputDir),
        filename: 'bundle.js'
    },

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
        new HtmlWebpackPlugin(),
        new CopyPlugin([
            { from: 'assets', to: 'assets' },
        ]),]
};

