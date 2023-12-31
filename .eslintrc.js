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
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
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
    eqeqeq: ['error', 'always'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'no-self-assign': 'error',
    'no-undef': 'off',
    'no-func-assign': 'error',
    'no-duplicate-imports': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': 'off',
    'linebreak-style': ['error', 'unix'],
    '@typescript-eslint/no-empty-interface': 'off',
  },
}
