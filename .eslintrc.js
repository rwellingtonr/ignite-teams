module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native-a11y/ios',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'no-undef': 'off',
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'all',
        semi: false,
        singleQuote: true,
        printWidth: 100,
        arrowParens: 'always',
        useTab: true,
      },
    ],
    indent: ['error', 2],
    'no-self-assign': 'error',
    'no-func-assign': 'error',
    eqeqeq: ['error', 'always'],
    'no-duplicate-imports': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
  },
}
