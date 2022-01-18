module.exports = {
    env: {
        node: true
    },

    rules: {
        // 强制返回callback函数
        // enforce return after a callback
        'callback-return': 'off',

        // 要求 require() 出现在顶层模块作用域中
        // require all requires be top-level
        // https://eslint.org/docs/rules/global-require
        'global-require': 'error',

        // 要求回调函数中有容错处理（这个模式期望一个 Error 对象或 null 作为回调的第一个参数）
        // enforces error handling in callbacks (node environment)
        'handle-callback-err': 'off',

        // 禁用 Buffer() 构造函数
        // disallow use of the Buffer() constructor
        // https://eslint.org/docs/rules/no-buffer-constructor
        'no-buffer-constructor': 'error',

        // 禁止 require 调用与普通变量声明混合使用
        // disallow mixing regular variable and require declarations
        'no-mixed-requires': ['off', false],

        // 不允许 new require
        // disallow use of new operator with the require function
        'no-new-require': 'error',

        // 当使用 _dirname 和 _filename 时不允许字符串拼接（用path.join或path.resolve來磨平操作系統差异）
        // disallow string concatenation with __dirname and __filename
        // https://eslint.org/docs/rules/no-path-concat
        'no-path-concat': 'error',

        // 禁用 process.env
        // disallow use of process.env
        'no-process-env': 'off',

        // 禁用 process.exit()
        // disallow process.exit()
        'no-process-exit': 'off',

        // 禁止指定的Nodejs模块
        // restrict usage of specified node modules
        'no-restricted-modules': 'off',

        // 禁止使用同步方法
        // disallow use of synchronous methods (off by default)
        'no-sync': 'off'
    }
};
