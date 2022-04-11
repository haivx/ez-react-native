module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  env: {
    node: true,
    browser: true,
    commonjs: true,
    amd: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
