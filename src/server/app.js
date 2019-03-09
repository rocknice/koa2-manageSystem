const Koa = require('koa');
// import Koa from 'koa';
const serve = require('koa-static');
const app = new Koa();
const render = require('koa-swig');
const co = require('co');
const bodyParser = require('koa-bodyparser') // 处理post请求体
const initController = require('./controllers/initController')
const errorHandler = require('./middlewares/errorHandler')
const log4js = require('log4js');
const config = require('./config')
app.use(serve(config.staticDir));
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: config.cacheMode, // disable, set to false
    ext: 'html',
    writeBody: false
}));

app.use(bodyParser())
log4js.configure({
    appenders: { cheese: { type: 'file', filename: './log/book.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
  });
   
const logger = log4js.getLogger('cheese');
// 处理404错误，放在路由之前
errorHandler.error(app, logger);
initController.init(app)
app.listen(config.port, () => {console.log(`服务已在${config.port}端口启动`)})


// 筛选出符合的人
// var mans = [
//   {name: '张三'},
//   {name: '李四'},
//   {name: '王二'},
//   {name: '赵六'}
// ]
// function searchMan(query) {
//   return mans.filter((man) => {
//     return man.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   })
// }
