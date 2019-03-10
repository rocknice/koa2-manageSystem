// import {join} from 'path';
const path = require('path')
// import _ from 'lodash';
const _ = require('lodash')

let config = {
    "viewDir": path.join(__dirname, "../views/books", "pages"),
    "staticDir": path.join(__dirname, "..", "assets")
}
if(process.env.NODE_ENV == "development") {
    const localConfig = {
        baseURL:"http://localhost:8080/index.php?",
        cacheMode: false,
        port: 3001
    }
    config = _.extend(config, localConfig);
}
if(process.env.NODE_ENV == "production") {
    const prodConfig = {
        cacheMode: "memory",
        port: 8081
    }
    config = _.extend(config, prodConfig);
}

module.exports = config