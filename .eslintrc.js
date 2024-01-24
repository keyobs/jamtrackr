module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
        'react-native/react-native': true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    ignorePatterns: ['!.*', 'dist', 'node-modules' ],
    settings :{
        react: {
            version: 'detect'
        }
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                ecmaVersion: 'latest',
                sourceType: 'module'
            },
            plugins: ['@typescript-eslint', 'react', 'react-native', 'detox'],
            rules: {
                indent: ['error', 4],
                camelcase: 'error',
                eqeqeq: ['warn', 'smart'],
                quotes: ['warn', 'single'],
                semi: ['warn', 'always'],
                'no-multi-assign': 'error',
                'no-var': 'warn',
                'no-duplicate-imports': 'warn',
                'linebreak-style': ['warn', 'unix'],
                'prefer-const': 'warn',
                'react/prop-types': 'off',
            }
        }
    ],
};