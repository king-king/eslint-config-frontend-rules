module.exports = {
    extends: [
        './best-practices',
        './errors',
        './es6',
        './imports',
        './node',
        './strict',
        './style',
        './variables',
        './react-a11y',
        './react-hooks',
        './react'
    ].map(require.resolve),
    rules: {}
};
