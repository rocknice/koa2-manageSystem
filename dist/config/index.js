'use strict';

// import {join} from 'path';
const path = require('path');
// import _ from 'lodash';
const _ = require('lodash');

let config = {
    "viewDir": path.join(__dirname, "../../web/views/books/", "pages"),
    "staticDir": path.join(__dirname, "../../web/", "assets")
};
{
    const prodConfig = {
        cacheMode: "memory",
        port: 8081
    };
    config = _.extend(config, prodConfig);
}

module.exports = config;
