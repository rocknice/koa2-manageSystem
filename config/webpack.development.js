const CopyPlugin = require('copy-webpack-plugin');
const {
    join
} = require("path");
module.exports = {
    plugins: [
        new CopyPlugin([{
            from: join(__dirname, "../", "/src/web/views/common/layout.html"),
            to: '../views/common/layout.html'
        }]),
        new CopyPlugin([{
            from: join(__dirname, "../", "/src/web/assets/styles/main.css"),
            to: '../assets/styles/main.css'
        }]),
        new CopyPlugin([{
            from: join(__dirname, "../", "/src/web/assets/styles/bootstrap.min.css"),
            to: '../assets/styles/bootstrap.min.css'
        }]),
        new CopyPlugin([{
            from: join(__dirname, "../", "/src/web/assets/fonts"),
            to: '../assets/fonts'
        }]),
        new CopyPlugin([{
            from: join(__dirname, "../", "/src/web/components"),
            to: '../components'
        }], {
            copyUnmodified: true,
            ignore: ["*.js", "*.css",".DS_Store"]
        }),
    ]
}