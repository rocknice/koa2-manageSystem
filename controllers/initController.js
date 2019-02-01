
const indexController = require('./indexController.js')
const router = require('koa-simple-router');
module.exports = {
    init(app) {
        app.use(router(_ => {
            _.get('/', indexController.init())
            _.get('/index', async (ctx, next) => {
                koa()
            })
            _.get('/view', indexController.view())
            _.get('/delete', indexController.delete())
            _.get('/createbook', indexController.createBook())
            _.post('/createbook/create', indexController.create())
            _.get('/updatebook', indexController.updateBook())
            _.get('/search', indexController.search())
            _.post('/updatebook/update', indexController.update())
        }))
    }
}