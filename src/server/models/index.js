/**
 * @fileoverview 实现index的数据模型
 * @author 287866455@qq.com
 */
const rp = require('request-promise')
const SafeRequest = require("../utils/SafeRequest.js")
/**
 * Book类 获取后台关于图书相关的数据类
 * @class
 */

class Book {
    /**
     * @constructor
     * @param {string} app KOA2执行上下文
     */
    constructor(app){}
    /**
     * 获取后台全部图书的数据方法
     * @params {*} options 配置项
     * @example
     * return new Promise
     * actionInit()
     */
    actionInit() {
        // const options = {
        //     uri: 'http://localhost:8080/index.php?r=books%2Findex',
        //     method: "GET",
        //     json: true
        // };
        // return new Promise((resolve, reject) => {
        //     rp(options)
        //     .then(function (res) {
        //         if (res) {
        //             resolve(res)
        //         }
        //         resolve(res.data)
        //     })
        //     .catch(function (err) {
        //         reject(err)
        //     });
        // })
        const safeRequest = new SafeRequest("r=books/index");
        return safeRequest.fetch({});
    }
    actionView(params) {
        // const options = {
        //     uri: 'http://localhost:8080/index.php?r=books/view&id=' + params.id,
        //     method: "GET",
        //     json: true,
        // };
        // return new Promise((resolve, reject) => {
        //     rp(options)
        //     .then(function (res) {
        //         if (res) {
        //             resolve(res)
        //         }
        //     })
        //     .catch(function (err) {
        //         reject(err)
        //     });
        // })
        const safeRequest = new SafeRequest(`r=books/view&id=${params.id}`);
        return safeRequest.fetch({});
    }
    actionDelete(params) {
        // const options = {
        //     uri: 'http://localhost:8080/index.php?r=books/delete&id=' + params.id,
        //     method: "GET",
        //     // json: true,
        // };
        // return new Promise((resolve, reject) => {
        //     rp(options)
        //     .then(function (res) {
        //         if (res) {
        //             resolve(res)
        //         }
        //     })
        //     .catch(function (err) {
        //         reject(err)
        //     });
        // })
        const safeRequest = new SafeRequest(`r=books/delete&id=${params.id}`);
        return safeRequest.fetch({});
    }
    actionCreate(options) {
        // const options = {
        //     uri: 'http://localhost:8080/index.php?r=books/create',
        //     method: "post",
        //     body: params,
        //     json: true
        // };
        // return new Promise((resolve, reject) => {
        //     rp(options)
        //     .then(function (res) {
        //         if (res) {
        //             resolve(res)
        //         }
        //     })
        //     .catch(function (err) {
        //         console.log(err)
        //         reject(err)
        //     });
        // })
        const safeRequest = new SafeRequest("r=books/create");
        return safeRequest.fetch({
            method: "POST",
            params: options.params
        });
    }
    updatePage(params) {
        // const options = {
        //     uri: 'http://localhost:8080/index.php?r=books/view&id=' + params.id,
        //     method: "GET",
        //     json: true,
        // };
        // return new Promise((resolve, reject) => {
        //     rp(options)
        //     .then(function (res) {
        //         if (res) {
        //             resolve(res)
        //         }
        //     })
        //     .catch(function (err) {
        //         reject(err)
        //     });
        // })
        const safeRequest = new SafeRequest(`r=books/view&id=${params.id}`);
        return safeRequest.fetch({});
    }
    actionUpdate(options, id) {
        // const options = {
        //     uri: 'http://localhost:8080/index.php?r=books/update&id=' + params.Books.id,
        //     method: "post",
        //     body: params,
        //     json: true
        // };
        // return new Promise((resolve, reject) => {
        //     rp(options)
        //     .then(function (res) {
        //         if (res) {
        //             resolve(res)
        //         }
        //     })
        //     .catch(function (err) {
        //         reject(err)
        //     });
        // })
        const safeRequest = new SafeRequest(`r=books/update&id=${id}`)
        return safeRequest.fetch({
            method: "POST",
            params: options.params
        });
    }
    actionSearch(str) {
        // const options = {
        //     uri: `http://localhost:8080/index.php?${str}&r=books/index`,
        //     method: "GET",
        //     json: true
        // };
        // return new Promise((resolve, reject) => {
        //     rp(options)
        //     .then(function (res) {
        //         if (res) {
        //             resolve(res)
        //         }
        //     })
        //     .catch(function (err) {
        //         console.log(err)
        //         reject(err)
        //     });
        // })
        const safeRequest = new SafeRequest(`${str}&r=books/index`);
        return safeRequest.fetch({});
    }
}
module.exports = Book