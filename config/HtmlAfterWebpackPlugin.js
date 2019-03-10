// webpack提供一些生命周期可以被调用
// 拦截最后生成的html
// 分清这个swig文件对应的js和css
// htmlPluginData是webpack打包的所有chunks
// 注意：要在htmlwebpackplugin调用执行完再调用该插件

// 定义一个webpack插件名
const pluginName = 'HtmlAfterWebpackPlugin'
let assetsHelp = (data) => {
    let js = []
    let css = []
    let dir = {
        js: item => `<script src="${item}"></script>`,
        css: item => `<link rel="stylesheet" href="${item}">`
    }
    for(let item of data.js) {
        js.push(dir.js(item))
    }
    for(let item of data.css) {
        css.push(dir.css(item))
    }
    return {
        js,
        css
    }
}
// 封装插件
class HtmlAfterWebpackPlugin {
    apply(compiler) {
        compiler.hooks.compilation.tap(pluginName, compilation => {
            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName, htmlPluginData => {
                // 这里需要取到swig模版,然后完成模版里对js和css文件的替换插入
                let _html = htmlPluginData.html
                const result = assetsHelp(htmlPluginData.assets)
                _html = _html.replace(/pages:/g, "../../")
                _html = _html.replace(/components:/g, "../../../components/")
                _html = _html.replace("<!--injectjs-->", result.js.join(""))
                _html = _html.replace("<!--injectcss-->", result.css.join(""))
                htmlPluginData.html = _html
            })
        }) 
    }
}
module.exports = HtmlAfterWebpackPlugin