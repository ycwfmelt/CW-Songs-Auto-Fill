const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        content: "./src/content/index.js",
        options: "./src/options.js",
        popup: "./src/popup.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}