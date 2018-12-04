const presets = [
    ["@babel/preset-env", {
        targets: {
            edge: "17",
            firefox: "60",
            chrome: "67",
            safari: "11.1"
        },
        useBuiltIns: "usage"
    }]
];
const plugins = [
    "@babel/plugin-transform-runtime",
    // 箭头函数
    "@babel/plugin-transform-arrow-functions", 
    //  解构赋值
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-transform-spread",
    // 变量let
    "@babel/plugin-transform-block-scoping",
    // 参数赋值
    "@babel/plugin-transform-parameters",
    // 函数名
    "@babel/plugin-transform-function-name",
    // 字符串模板
    "@babel/plugin-transform-template-literals",
    "@babel/plugin-proposal-function-sent"
]

module.exports = { presets, plugins };