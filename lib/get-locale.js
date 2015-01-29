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

function getLocale(options) {
	var lang = (options && options.cookie)
			? fromCookie(options.cookie)
			: fromCookie();

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

function fromCookie(name) {
	name = name || 'lang';
	return cookie(name);
}