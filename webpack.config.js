module.exports = {
    entry:  './src/js',
    output: {
        path: 'build',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                include: __dirname + '/src',
            },
            {
                test: /\.css/,
                loaders: ['style', 'css'],
                include: __dirname + '/src'
            }
        ],
    }
};