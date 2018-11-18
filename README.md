# eslint-plugin-irm

[![LICENSE](https://img.shields.io/github/license/hadeshe93/eslint-plugin-irm.svg?style=flat)](https://github.com/hadeshe93/eslint-plugin-irm/blob/master/LICENSE.md)

A plugin for eslint.

For starting to use eslint quickly and conveniently in your project, you can just install the `eslint` and this package.

## Installation
```sh
$ npm install --save-dev eslint eslint-plugin-irm
```

## Usage
This plugin consists of `eslint-config-standard` and its peerDependencies. Avoiding ignoring to install so many peerDependencies, we can just install this one pkg.

And we can create basic config file like following.

Example **.eslintrc.js**:
```js
module.exports = {
  root: true,
  extends: [
    "plugin:irm/base"
  ],
  // put your custom rules here
  rules: {}
};
```

## Progressive config
This plugin is designed to contain progressive configs which based on the former config. And that can let us to use appropriate config in different circumstance.

Configs:
+ `eslint-plugin-irm/base`