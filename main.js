let t = require("./dist/main");
module.exports = t;

// 驼峰转连字符
const hyphenateRE = /\B([A-Z])/g
let cached = (str => {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
})

// 连字符转驼峰
const camelizeRE = /-(\w)/g
const camelize = (str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
}

console.log(camelize("abc-aefg-igkLmn-是-dsfad"));


// 正则表达日志
// \B 是非单词边界 \b是单词边界（类似于空格 Tab 行首字 行尾 空行 标点）