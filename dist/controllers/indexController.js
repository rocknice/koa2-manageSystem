"use strict";

const bookModel = require('../models/index.js');

const {
  URLSearchParams
} = require("url");

module.exports = {
  init() {
    return async (ctx, next) => {
      const model = new bookModel();
      const result = await model.actionInit();
      ctx.body = await ctx.render('home', {
        data: result.data
      });
    };
  },

  view() {
    return async (ctx, next) => {
      const params = ctx.query;
      const model = new bookModel();
      const result = await model.actionView(params);
      ctx.body = await ctx.render('view', {
        data: result.data
      });
    };
  },

  delete() {
    return async (ctx, next) => {
      const params = ctx.query;
      const model = new bookModel();
      const result = await model.actionDelete(params);

      if (result.data) {
        ctx.redirect(`/`, {
          msg: '已删除'
        });
        ctx.status = 302;
      }
    };
  },

  createBook() {
    return async (ctx, next) => {
      ctx.body = await ctx.render('create');
    };
  },

  create() {
    return async (ctx, next) => {
      // console.log(ctx.request.body)
      // const params = ctx.request.body
      // // let obj = {}
      // // for(let value in params.Books) {
      // //     obj['Books[' + value + ']'] = params.Books[value]
      // //     // str = 'Books[' + value + ']' + '=' + params.Books[value] + '&' + str
      // // }
      // const model = new bookModel();
      // const data = await model.actionCreate(params);
      // if (data) {
      //      ctx.body = data
      // }
      // console.log(ctx.request.body)
      const info = ctx.request.body;
      const model = new bookModel();
      const params = new URLSearchParams();
      params.append("Books[date]", info.Books.date);
      params.append("Books[auther]", info.Books.auther);
      params.append("Books[publish]", info.Books.publish);
      params.append("Books[book]", info.Books.book);
      params.append("Books[price]", info.Books.price);
      params.append("Books[id]", info.Books.id);
      params.append("Books[type]", info.Books.type);
      const result = await model.actionCreate({
        params
      });
      console.log('----', result);
      ctx.body = result;
    };
  },

  updateBook() {
    return async (ctx, next) => {
      const params = ctx.query;
      const model = new bookModel();
      const result = await model.updatePage(params);
      ctx.body = await ctx.render('update', {
        data: result.data
      });
    };
  },

  update() {
    return async (ctx, next) => {
      // const params = ctx.request.body
      // const model = new bookModel();
      // const data = await model.actionUpdate(params);
      // if (data) {
      //      ctx.body = data
      // }
      const info = ctx.request.body;
      const model = new bookModel();
      const params = new URLSearchParams();
      params.append("Books[date]", info.Books.date);
      params.append("Books[auther]", info.Books.auther);
      params.append("Books[publish]", info.Books.publish);
      params.append("Books[book]", info.Books.book);
      params.append("Books[price]", info.Books.price);
      params.append("Books[id]", info.Books.id);
      params.append("Books[type]", info.Books.type);
      const result = await model.actionUpdate({
        params
      }, info.Books.id);
      console.log(result);
      ctx.body = result;
    };
  },

  search() {
    return async (ctx, next) => {
      const params = ctx.query;
      const str = `BooksSearch[book]=${params.book ? params.book : ''}&BooksSearch[id]=${params.id ? params.id : ''}&BooksSearch[auther]=${params.auther ? params.auther : ''}&BooksSearch[type]=${params.type ? params.type : ''}`;
      const model = new bookModel();
      const result = await model.actionSearch(str);
      console.log(2222, result);
      ctx.body = await ctx.render('index', {
        data: result.data,
        query: params
      });
    };
  }

};