module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    globals: {
        H: true,
        axios: true,
    },
    extends: ['plugin:vue/essential', 'airbnb-base'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        indent: ['error', 4],
        'implicit-arrow-linebreak': 'off',
        'function-paren-newline': 'off',
    },
};
