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

assert(get({}, ['a', 'b']) === undefined)

assert(get({}, ['a'], 'surrogate') === 'surrogate')
```
