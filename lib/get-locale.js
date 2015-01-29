/**
 * Require dependencies
 */

var cookie = require('component/cookie');

/**
 * Expose `getLocale` function
 */

module.exports = getLocale;


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
 * @return {String}
 */

function fromCookie() {
	return cookie('lang');
}