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
		cookie: 'lang'
	};

var settings = extend({}, defaults);

/**
 * Return the browser language preference
 * 
 * @return {String}
 */

function getLocale() {
	var lang = fromCookie();

	if (lang)
		return lang;

	return navigator.languages
		// modern Chrome/Firefox
		? navigator.languages[0] 
		// IE11
		: (navigator.language || navigator.userLanguage);
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
 * Overwrite default settings.
 *
 * 	options:
 * 		- `cookie` - cookie name to check | 'lang'
 * 	
 * @param  {Object} options 
 * @return {Object}
 */

module.exports.configure = function(options) {
	return extend(settings, defaults, options);
};