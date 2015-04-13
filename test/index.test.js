/* jshint mocha: true */
var expect = require('chai').expect;
var get = require('..');

describe('keyarray-get', function() {
  describe('Functionality', function() {
    it('returns properties', function() {
      expect(
        get({a: 'value'}, ['a'])
      ).to.equal('value');
    });

    it('returns nested properties', function() {
      expect(
        get({a: {b: 'value'}}, ['a', 'b'])
      ).to.equal('value');
    });

    it('works with arrays', function() {
      expect(
        get({a: {b: ['value']}}, ['a', 'b', 0])
      ).to.equal('value');
    });
  });

  describe('Errors', function() {
    it('throws TypeError for an invalid key array', function() {
      expect(
        function() {
          get({}, null);
        }
      ).to.throw(TypeError);
    });

    it('throws for an invalid object', function() {
      expect(
        function() {
          get(null, [0]);
        }
      ).to.throw(TypeError);
    });
  });

  describe('Missing Properties', function() {
    it('returns undefined by default', function() {
      expect(
        get({}, ['a'])
      ).to.equal(undefined);
    });

    it('returns a surrogate value when given', function() {
      expect(
        get({}, ['a'], 'surrogate')
      ).to.equal('surrogate');
    });

    it('throws an error of a given type', function() {
      var ErrorType = function() {};
      expect(
        function() {
          get({}, ['a'], ErrorType);
        }
      ).to.throw(ErrorType);
    });
  });
});
