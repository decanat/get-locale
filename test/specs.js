var assert = require('assert');

var cookie = require('cookie');

var getLocale = require('../');


var lang;

describe('Itself', function () {
    it('should be proper type', function () {
        assert(getLocale);
        assert.equal(getLocale.length, 1);
    });
});

describe('Cookies', function () {
    it('should return cookie value if set', function () {
        assert.equal(getLocale(), 'en-US');

        cookie('lang', 'hy');

        assert.equal(getLocale(), 'hy');
    });
});