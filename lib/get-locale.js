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
        // default locale, if nothing helps
        defaultLocale: void 0,
        // name of cookie to check
        cookie: 'lang'
    };

var settings = extend({}, defaults);

/**
 * Methods to check
 */

var sources = [
        fromHTMLLang,
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

    // return if valid
    return lang
        // return default if nothing
        || settings.defaultLocale;
}


/**
 * Check root element's `lang` attribute.
 *
 * @return {String}
 */

function fromHTMLLang() {
    return document.documentElement
        .getAttribute('lang');
}

/**
 * Check cookies for prefered language.
 *
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
