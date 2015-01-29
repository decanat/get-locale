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
    after(function(){
        // cleanup
        cookie('lang', null);
        cookie('locale', null);
    });

    it('should return cookie value if set', function () {
        assert.equal(getLocale(), 'en-US');

        cookie('lang', 'hy');

        assert.equal(getLocale(), 'hy');
    });

    it('should support cookie name as argument', function () {
        getLocale.configure({ cookie: 'locale' });

        assert.equal(getLocale(), 'en-US');

        cookie('locale', 'hy');

        assert.equal(getLocale(), 'hy');
    });
});