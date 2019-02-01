const rp = require('request-promise')

class Book {
    constructor(){}
    actionInit() {
        const options = {
            uri: 'http://localhost:8080/index.php?r=books%2Findex',
            method: "GET",
            json: true,
            // headers: {
            //     "Content-Type": "application/json; charset=utf-8"
            // }
        };
        return new Promise((resolve, reject) => {
            rp(options)
            .then(function (res) {
                if (res) {
                    resolve(res)
                }
                resolve(res.data)
            })
            .catch(function (err) {
                reject(err)
            });
        })
    }
    actionView(params) {
        const options = {
            uri: 'http://localhost:8080/index.php?r=books/view&id=' + params.id,
            method: "GET",
            json: true,
        };
        return new Promise((resolve, reject) => {
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
    }
    actionDelete(params) {
        const options = {
            uri: 'http://localhost:8080/index.php?r=books/delete&id=' + params.id,
            method: "GET",
            // json: true,
        };
        return new Promise((resolve, reject) => {
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
    }
    actionCreate(params) {
        const options = {
            uri: 'http://localhost:8080/index.php?r=books/create',
            method: "post",
            body: params,
            json: true
            // body: obj
        };
        return new Promise((resolve, reject) => {
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
    }
    updatePage(params) {
        const options = {
            uri: 'http://localhost:8080/index.php?r=books/view&id=' + params.id,
            method: "GET",
            json: true,
        };
        return new Promise((resolve, reject) => {
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
    }
    actionUpdate(params) {
        const options = {
            uri: 'http://localhost:8080/index.php?r=books/update&id=' + params.Books.id,
            method: "post",
            body: params,
            json: true
        };
        return new Promise((resolve, reject) => {
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
    }
    actionSearch(str) {
        const options = {
            uri: `http://localhost:8080/index.php?${str}&r=books/index`,
            method: "GET",
            json: true
        };
        return new Promise((resolve, reject) => {
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
    }
}
module.exports = Book