module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    // https://standardjs.com/rules-zhcn.html#javascript-standard-style
    'standard'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'semi': ['error', 'always'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}

