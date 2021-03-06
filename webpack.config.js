module.exports = {
    entry: "./App/nav.js",
    output: {
        path: "./dist",
        publicPath: "assets",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loaders: ['style', 'css'] },
            { test: /\.less$/, loader: "style!css!less" }
        ]
    }
};

