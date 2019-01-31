const Koa  = require('koa');
const serve = require('koa-static');
const app = new Koa();
const router = require('koa-simple-router');
const render = require('koa-swig');
const path = require('path');
const co = require('co');
const rp = require('request-promise');
const bodyParser = require('koa-bodyparser')
const initController = require('./controllers/initController')

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
// 处理404错误
app.use(async function pageNotFound(ctx, next){
    // console.log('3', ctx.status)
    await next()
    // console.log('7', ctx.status)
    if(404 !== ctx.status) return 0;
    ctx.status = 404;
    // console.log('8', ctx.status)
    switch(ctx.accepts('html', 'json')){
        case 'html':
            ctx.type = 'html';
            ctx.body = '<p>Page Not Found</p>';
            break;
        case 'json':
            ctx.body = {
                message: 'Page Not Found'
            };
            break;
        default:
            ctx.type = 'text';
            ctx.body = 'Page Not Found';
    }
    // console.log('9', ctx.status)
});
app.use(serve(path.join(__dirname, 'public')));
// app.use(router.routes());
// app.use(router.allowedMethods());
initController.init(app, router, rp)
// router.get('/', async (ctx, next) => {
//     let data = await new Promise((resolve, reject) => {
//         rp(options)
//         .then(function (res) {
//             console.log(res.data)
//             resolve(res.data)
//         })
//         .catch(function (err) {
//             console.log("--------", err)
//             reject(err)
//         });
//     })
//     ctx.body = await ctx.render('index', {
//         data: data
//     })
// });
// router.get('/index', async (ctx, next) => {
//     ctx.body = await ctx.render('index')
// });
app.listen(8081, () => {console.log('服务已在8081端口启动')})