/**
 * Require dependencies
 */

var cookie = require('component-cookie');

var extend = require('yiwn-extend');

/**
 * Expose `getLocale` function
 */

module.exports = getLocale;


var defaults = {
        // supported locales, defaults to first silently
        locales: ['en'],
        // default locale, to overwrite default `locales[0]`
        defaultLocale: void 0,
        // name of cookie to check
        cookie: 'lang'
    };

var settings = extend({}, defaults);

/**
 * Methods to check
 */

var sources = [
        fromCookie,
        fromNavigator
    ];

/**
 * Return the browser language preference
 *
 * @return {String}
 */

function getLocale() {
    var lang,
        i = 0,
        l = sources.length;

    // iterate until `lang` gets defined
    while (i < l && !lang)
        lang = sources[i++]();

    return lang
        // return if valid
        ? lang
        : (settings.defaultLocale || settings.locales[0]);
}

/**
 * Check cookies for prefered language.
 *
 * @param  {String} name [optional]
 * @return {String}
 */

function fromCookie() {
    return cookie(settings.cookie);
}


/**
 * Check navigator.
 *
 * @return {String}
 */

function fromNavigator() {
    return navigator.languages
        // modern Chrome/Firefox
        ? navigator.languages[0]
        // IE11
        : (navigator.language || navigator.userLanguage);
}


/**
 * Overwrite default settings.
 *
 *  options:
 *      - `cookie` - cookie name to check | 'lang'
 *
 * @param  {Object} options
 * @return {Object}
 */

module.exports.configure = function(options) {
    return extend(settings, defaults, options);
};
