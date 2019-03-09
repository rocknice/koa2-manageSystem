const argv = require("yargs-parser")(process.argv.slice(2)); // 拿到用户的参数环境
const _mode = argv.mode;
console.log(argv)