var path = require('path')
var console = require('console')

var resolve = (to) => {
    return path.resolve(__dirname + '/src' + to)
}

module.exports = {
    entry: [
        'themes/stephntpaul/source/js/app.js',
    ],

    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': resolve('')
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
}