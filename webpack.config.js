const argv = require("yargs-parser")(process.argv.slice(2)); // 拿到用户的参数环境
const _mode = argv.mode || "development"; // argv是node原生的
const _mergeConfig = require(`./config/webpack.${_mode}.js`)
const merge = require('webpack-merge');
const glob = require('glob');
const files = glob.sync('./src/web/views/**/*.entry.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlAfterWebpackPlugin = require('./config/HtmlAfterWebpackPlugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
    join
} = require("path");
// ./src/web/views/books/create.entry.js
// ./src/web/views/books/home.entry.js
// ./src/web/views/books/update.entry.js
// ./src/web/views/books/view.entry.js
var entry = {}
var _plugins = []
for(let item of files) {
    if(/.+\/([a-zA-Z]+)(\.entry\.js$)/g.test(item) === true){
        const _entryKey = RegExp.$1
        entry[_entryKey] = item
        _plugins.push(new HtmlWebpackPlugin({
            filename: `../views/books/pages/${_entryKey}.html`,
            template: `src/web/views/books/pages/${_entryKey}.html`,
            chunks: [_entryKey],
            inject: false
        }))
    }
}
console.log(entry)
let webpackconfig = {
    entry: entry,
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                "css-loader"
            ]
        }]
    },
    output: {
        path: join(__dirname, "./dist/assets"),
        publicPath: "/",
        filename: "scripts/[name].bundle.js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
            chunkFilename: "styles/[id].css"
        }),
        ..._plugins,
        new HtmlAfterWebpackPlugin()
    ]
}
module.exports = merge(webpackconfig, _mergeConfig)