const rp = require('request-promise')

class Book {
    initModel() {
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
}
module.exports = Book