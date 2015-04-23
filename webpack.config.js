var webpack = require('webpack');
module.exports = {
    entry: {
        'yasp': './public/js/yasp.js'
    },
    output: {
        filename: '[name].min.js',
        path: './public/build'
    },
    externals: [
        {
            $: "jquery"
        }
        ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff&name=/public/build/[hash].[ext]"
            },
            {
                test: /\.(ttf|eot|svg|jpg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader?name=/public/build/[hash].[ext]"
                }
        ]
    },
    plugins: [
new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};