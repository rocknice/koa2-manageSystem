const bookModel = require('../models/index.js')
module.exports = {
    init(rp) {
        return async (ctx, next) => {
            const model = new bookModel();
            const data = await model.actionInit();
            ctx.body = await ctx.render('index', {
                data: data
            })
        }
    },
    view(rp) {
        return async (ctx, next) => {
            const params = ctx.query
            const model = new bookModel();
            const data = await model.actionView(params);
            ctx.body = await ctx.render('view', {
                data: data
            })
        }
    },
    delete(rp) {
        return async (ctx, next) => {
            const params = ctx.query
            const model = new bookModel();
            const data = await model.actionDelete(params);
            if(data) {
                ctx.redirect(`/`, {
                    msg: '已删除'
                });
                ctx.status = 302;
            }
        }
    },
    createBook() {
        return async (ctx, next) => {
            ctx.body = await ctx.render('createBook')
        }
    },
    create(rp) {
        return async (ctx, next) => {
            console.log(ctx.request.body)
            const params = ctx.request.body
            // let obj = {}
            // for(let value in params.Books) {
            //     obj['Books[' + value + ']'] = params.Books[value]
            //     // str = 'Books[' + value + ']' + '=' + params.Books[value] + '&' + str
            // }
            const model = new bookModel();
            const data = await model.actionCreate(params);
            if (data) {
                 ctx.body = data
            }
        }
    },
    updateBook(rp) {
        return async (ctx, next) => {
            const params = ctx.query
            const model = new bookModel();
            const data = await model.updatePage(params);
            ctx.body = await ctx.render('updateBook', {
                data: data
            })
        }
    },
    update(rp) {
        return async (ctx, next) => {
            const params = ctx.request.body
            // let obj = {}
            // for(let value in params.Books) {
            //     obj['Books[' + value + ']'] = params.Books[value]
            //     // str = 'Books[' + value + ']' + '=' + params.Books[value] + '&' + str
            // }
            const model = new bookModel();
            const data = await model.actionUpdate(params);
            if (data) {
                 ctx.body = data
            }
        }
    },
    search(rp) {
        return async (ctx, next) => {
            const params = ctx.query
            const str = `BooksSearch[book]=${params.book ? params.book : ''}&BooksSearch[id]=${params.id ? params.id : ''}&BooksSearch[auther]=${params.auther ? params.auther : ''}&BooksSearch[type]=${params.type ? params.type : ''}`
            const model = new bookModel();
            const data = await model.actionSearch(str);
            ctx.body = await ctx.render('index', {
                data: data,
                query: params
            })
        }
    },
}