keyarray-get.js
===============

[![NPM version](https://img.shields.io/npm/v/keyarray-get.svg)](https://www.npmjs.com/package/keyarray-get)
[![build status](https://img.shields.io/travis/kemitchell/keyarray-get.js.svg)](http://travis-ci.org/kemitchell/keyarray-get.js)

Get nested properties with key arrays.

```javascript
var get = require('keyarray-get')
var assert = require('assert')

assert(get({a: 'value'}, ['a']) === 'value')

assert(get({a: {b: 'value'}}, ['a', 'b']) === 'value')

assert(get({a: {b: ['value']}}, ['a', 'b', 0]) === 'value')

assert.throws(function () {
  get({}, null)
}, TypeError)

assert.throws(function () {
  get(null, [0])
}, TypeError)

assert(get({}, ['a']) === undefined)

assert(get({}, ['a'], 'surrogate') === 'surrogate')
```
