keyarray-get.js
===============

[![NPM version](https://img.shields.io/npm/v/keyarray-get.svg)](https://www.npmjs.com/package/keyarray-get)
[![build status](https://img.shields.io/travis/kemitchell/keyarray-get.js.svg)](http://travis-ci.org/kemitchell/keyarray-get.js)

Get nested properties with key arrays.

```javascript
var get = require('keyarray-get');

get({a: 'value'}, ['a']); // === 'value'

get({a: {b: 'value'}}, ['a', 'b']); // === 'value'

get({a: {b: ['value']}}, ['a', 'b', 0]); // === 'value'

get({}, null); // throws TypeError

get(null, [0]); // throws TypeError

get({}, ['a']); // === undefined

get({}, ['a'], 'surrogate'); // === 'surrogate'
```
