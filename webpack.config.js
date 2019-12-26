const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/content/index.js',
    output: {
        filename: 'content.js',
        path: path.resolve(__dirname, 'dist')
    }
}