keyarray-get.js
===============

[![NPM version](https://img.shields.io/npm/v/keyarray-get.svg)](https://www.npmjs.com/package/keyarray-get)
[![build status](https://img.shields.io/travis/kemitchell/keyarray-get.js.svg)](http://travis-ci.org/kemitchell/keyarray-get.js)

Get nested properties with key arrays

```javascript
var get = require('keyarray-get');

var object = {
  a: {
    b: 'value',
    c: ['first', 'second']
  }
};

get(object, ['a', 'b']);
// 'value'

get(object, ['x']);
// undefined

get(object, ['x'], 'surrogate');
// 'surrogate'

get(object, ['x'], TypeError);
// throws new TypeError

get(object, ['a', 'c', 1]);
// 'second'

get(object, ['a', 'c', 2]);
// undefined
```
