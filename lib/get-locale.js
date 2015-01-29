/**
 * Require dependencies
 */

var cookie = require('component-cookie'),
    query  = require('component-query'),
    type   = require('component-type');

var extend = require('yiwn-extend');

/**
 * Expose `getLocale` function
 */

module.exports = getLocale;

/**
 * Default settings
 */

var defaults = {
        // default locale, if nothing helps
        defaultLocale: void 0,
        // name of cookie to check
        cookie: 'lang'
    };

/**
 * Actual settings, can be modified via `.configure`
 */

var settings = extend({}, defaults);

/**
 * <html> element
 */

var rootElement = document.documentElement;

/**
 * Return given element's or browser's language preference.
 *
 * @param {DOM|String} el [optional]
 * @return {String}
 */

function getLocale(el) {
    // try html `lang` first
    var lang = fromLangAttribute(el);

    return lang
        || fromCookie()
        || fromNavigator()
        || settings.defaultLocale;
}


/**
 * Check root element's `lang` attribute.
 *
 * @param {DOM|String} el [optional] | '<html>'
 * @return {String}
 */

function fromLangAttribute(el) {
    // get DOM if selector provided
    if (type(el) == 'string')
        el = query(el);

    // if no element supplied or invalid selector,
    // use `<html>` element
    if (!el)
        return fromLangAttribute(rootElement);

    // check for language attribue
    var lang = el.getAttribute('lang');

    // halt and return if valid
    if (lang)
        return lang;

    // cache
    var parent = el.parentElement;

    // recursively parse up to `<html>`
    return parent
        ? fromLangAttribute(parent)
        // return `null` if nothing
        : void 0;
}

/**
 * Check cookies for prefered language.
 *
 * @return {String}
 */

function fromCookie() {
    return settings.cookie
        ? cookie(settings.cookie)
        // if disabled
        : void 0;
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
