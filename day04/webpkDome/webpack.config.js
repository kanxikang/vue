// 引入path模块
const path = require('path')
module.exports = {
    // 入口文件
    entry: path.join(__dirname, 'main.js'),
    // 编辑出口文件
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js"
    },
    // 选择开发模式或者生产模式
    mode: "development"
}