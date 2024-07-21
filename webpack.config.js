const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'main.bundle.js',
        chunkFilename: 'main.chunk.js',
        path: path.resolve(__dirname, 'dist/assets'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [miniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [new miniCssExtractPlugin({ filename: 'style.css' })],
    optimization: {
        minimize: true,
        minimizer: [
            `...`,
            new cssMinimizerPlugin(),
            new TerserWebpackPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true, // Elimina los console.log
                    },
                    format: {
                        comments: false, // Elimina los comentarios
                        beautify: false,
                        indent_level: 0
                    },
                },
                extractComments: false, // No extrae los comentarios en un archivo separado
            }),
        ],
        splitChunks: {
            chunks: 'all', // Divide todos los chunks
        },
    },
    mode: 'production',
    stats: {
        errorDetails: true
    }
};