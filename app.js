const Koa  = require('koa');
const serve = require('koa-static');
const app = new Koa();
const render = require('koa-swig');
const path = require('path');
const co = require('co');
const bodyParser = require('koa-bodyparser')
const initController = require('./controllers/initController')
const errorHandler = require('./middlewares/errorHandler')

app.use(serve(path.join(__dirname, 'public')));
app.context.render = co.wrap(render({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody: false
}));
app.use(bodyParser())
// 处理500错误
app.use(async (ctx,next) => {
    // console.log('1', ctx.status)
    try{
        // console.log('2', ctx.status)
        await next()
        // console.log('10', ctx.status)
    }catch(err){
        ctx.response.status = err.statusCode || err.status || 500;
        ctx.response.body = '服务端错误' + err;
    }
    // console.log('11', ctx.status)
});
// 处理404错误，放在路由之前
errorHandler.error(app);
initController.init(app)
app.listen(8081, () => {console.log('服务已在8081端口启动')})