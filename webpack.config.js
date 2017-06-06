module.exports = {
    context: __dirname,
    entry: {
        app: './src/js/index.js'
    },
    output: {
        path: __dirname + '/public',
        filename: 'app.js'
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        inline: true
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
        }]
    }
}
