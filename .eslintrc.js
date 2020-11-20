module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['prettier', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'prettier/prettier': 'error',
    'consistent-return': 'off',
    'no-console': 'off',
    'operator-linebreak': 'off',
  },
  plugins: ['prettier'],
};
