
const indexController = require('./indexController.js')

module.exports = {
    init(app, router, rp) {
        app.use(router(_ => {
            _.get('/', indexController.init(rp))
            _.get('/index', async (ctx, next) => {
                throw new Error('500');
                // ctx.body = await ctx.render('index')
            })
            // _.get('/view', async (ctx, next) => {
            //     ctx.body = await ctx.render('view')
            // })
            _.get('/view', indexController.view(rp))
            _.get('/delete', indexController.delete(rp))
            _.get('/createbook', indexController.createBook())
            _.post('/createbook/create', indexController.create(rp))
            _.get('/updatebook', indexController.updateBook(rp))
            _.get('/search', indexController.search(rp))
            _.post('/updatebook/update', indexController.update(rp))
        }))
    }
}