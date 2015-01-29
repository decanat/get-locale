var assert = require('assert');

var getLocale = require('../');


describe('Itself', function () {
    it('should be proper type', function () {
        assert(getLocale);
        assert.equal(getLocale.length, 1);
    });
});
