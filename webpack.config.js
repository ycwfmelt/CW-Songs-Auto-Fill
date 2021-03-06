const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        content: "./src/content/index.js",
        options: "./src/options.js",
        popup: "./src/popup.js",
        background: "./src/background.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!assets/*', '!manifest.json', '!options.html', '!popup.html']
        })
    ]
}
