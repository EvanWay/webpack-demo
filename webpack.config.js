module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'dist'
    }
    // module: {
    //     rules: [
    //         {
    //             test: /(\.jsx|\.js)$/,
    //             use: {
    //                 loader: "babel-loader",
    //                 options: { presets: ["env", "react"] }
    //             },
    //             exclude: /node_modules/
    //         }
    //     ]
    // }
};