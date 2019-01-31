const bookModel = require('../models/bookModel.js')
module.exports = {
    init(rp) {
        return async (ctx, next) => {
            // console.log('4', ctx.status)
            const model = new bookModel();
            const data = await model.initModel();
            // console.log('5', ctx.status)
            ctx.body = await ctx.render('index', {
                data: data
            })
            // console.log('6', ctx.status)
        }
    },
    view(rp) {
        return async (ctx, next) => {
            const params = ctx.query
            const data = await new Promise((resolve, reject) => {
                const options = {
                    uri: 'http://localhost:8080/index.php?r=books/view&id=' + params.id,
                    method: "GET",
                    json: true,
                    // headers: {
                    //     "Content-Type": "application/json; charset=utf-8"
                    // }
                };
                rp(options)
                .then(function (res) {
                    if (res) {
                        resolve(res)
                    }
                })
                .catch(function (err) {
                    reject(err)
                });
            })
            if(data) {
                ctx.body = await ctx.render('view', {
                    data: data
                })
            }
        }
    },
    delete(rp) {
        return async (ctx, next) => {
            const params = ctx.query
            const data = await new Promise((resolve, reject) => {
                const options = {
                    uri: 'http://localhost:8080/index.php?r=books/delete&id=' + params.id,
                    method: "GET",
                    // json: true,
                };
                rp(options)
                .then(function (res) {
                    if (res) {
                        resolve(res)
                    }
                })
                .catch(function (err) {
                    reject(err)
                });
            })
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
            console.log(1111111, params)
            const data = await new Promise((resolve, reject) => {
                const options = {
                    uri: 'http://localhost:8080/index.php?r=books/create',
                    method: "post",
                    body: params,
                    json: true
                    // body: obj
                };
                rp(options)
                .then(function (res) {
                    if (res) {
                        resolve(res)
                    }
                })
                .catch(function (err) {
                    console.log(err)
                    reject(err)
                });
            })
            if (data) {
                 ctx.body = data
            }
        }
    },
    updateBook(rp) {
        return async (ctx, next) => {
            const params = ctx.query
            const data = await new Promise((resolve, reject) => {
                const options = {
                    uri: 'http://localhost:8080/index.php?r=books/view&id=' + params.id,
                    method: "GET",
                    json: true,
                    // headers: {
                    //     "Content-Type": "application/json; charset=utf-8"
                    // }
                };
                rp(options)
                .then(function (res) {
                    if (res) {
                        resolve(res)
                    }
                })
                .catch(function (err) {
                    reject(err)
                });
            })
            if(data) {
                ctx.body = await ctx.render('updateBook', {
                    data: data
                })
            }
            console.log(data)
        }
    },
    update(rp) {
        return async (ctx, next) => {
            // console.log(ctx.request.body)
            const params = ctx.request.body
            // let obj = {}
            // for(let value in params.Books) {
            //     obj['Books[' + value + ']'] = params.Books[value]
            //     // str = 'Books[' + value + ']' + '=' + params.Books[value] + '&' + str
            // }
            console.log(22222, params)
            const data = await new Promise((resolve, reject) => {
                const options = {
                    uri: 'http://localhost:8080/index.php?r=books/update&id=' + params.Books.id,
                    method: "post",
                    body: params,
                    json: true
                };
                rp(options)
                .then(function (res) {
                    if (res) {
                        resolve(res)
                    }
                })
                .catch(function (err) {
                    reject(err)
                });
            })
            if (data) {
                 ctx.body = data
            }
        }
    },
    search(rp) {
        return async (ctx, next) => {
            const params = ctx.query
            const str = `BooksSearch[book]=${params.book ? params.book : ''}&BooksSearch[id]=${params.id ? params.id : ''}&BooksSearch[auther]=${params.auther ? params.auther : ''}&BooksSearch[type]=${params.type ? params.type : ''}`
            console.log(111111, params)
            const data = await new Promise((resolve, reject) => {
                const options = {
                    uri: `http://localhost:8080/index.php?${str}&r=books/index`,
                    method: "GET",
                    json: true
                };
                rp(options)
                .then(function (res) {
                    if (res) {
                        resolve(res)
                    }
                })
                .catch(function (err) {
                    console.log(err)
                    reject(err)
                });
            })
            ctx.body = await ctx.render('index', {
                data: data,
                query: params
            })
        }
    },
}