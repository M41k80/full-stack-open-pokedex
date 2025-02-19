

module.exports = {
  settings: {
    react: {
      version: 'detect', // Detecta automáticamente la versión de React
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    'cypress/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:cypress/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: [
    'react',
    'jest',
    'cypress'
  ],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'react/prop-types': 0,
    'no-unused-vars': 'warn',
    'no-undef': 'off',
    'no-redeclare': 'off',
    'no-console': 'off',

  },
}