module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
        'react-native/react-native': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@tanstack/eslint-plugin-query/recommended',
        'prettier',
    ],
    ignorePatterns: ['!.*', 'dist', 'node-modules'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
        },
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'react-native', 'detox'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        camelcase: 'error',
        eqeqeq: ['warn', 'smart'],
        quotes: ['warn', 'single'],
        semi: ['warn', 'always'],
        'linebreak-style': ['warn', 'unix'],
        'no-multi-assign': 'error',
        'no-var': 'warn',
        'no-duplicate-imports': 'warn',
        'prefer-const': 'warn',
        'react/prop-types': 'off',
        '@typescript-eslint/ban-ts-comment': [
            'warn',
            { 'ts-ignore': 'allow-with-description' },
        ],
    },
};
