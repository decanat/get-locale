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
	return navigator.languages
		// modern Chrome/Firefox
		? navigator.languages[0] 
		// IE11
		: (navigator.language || navigator.userLanguage);
}