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


describe('HTML `lang`', function(){
    it('should get root\'s `lang` value', function(){
        // no params
        assert.equal(getLocale(), 'de');

        // invalid selector
        assert.equal(getLocale('#el-h2'), 'de');

        // given element lacks of `lang`
        assert.equal(getLocale('#el-h1'), 'de');
    });

    it('should get element\'s `lang` value', function(){
        assert.equal(getLocale('#el-div'), 'hy');
    });

    it('should get element\'s closest parent\'s `lang` value', function(){
        assert.equal(getLocale('#el-p'), 'hy');
    });

    after(function(){
        // remove root's `lang` to evaluate later
        document.documentElement.removeAttribute('lang');
    });
});

describe('Cookies', function () {
    it('should return cookie value if set', function () {
        cookie('lang', 'hy');
        assert.equal(getLocale(), 'hy');
    });

    it('should support cookie name as argument', function () {
        cookie('locale', 'hy');

        getLocale.configure({ cookie: 'locale' });
        assert.equal(getLocale(), 'hy');
    });

    after(function(){
        // cleanup
        cookie('lang', null);
        cookie('locale', null);
    });
});

describe('Navigator', function(){
    it('should return navigator\'s preference', function(){
        assert.equal(getLocale(), 'en-US');
    });
});
