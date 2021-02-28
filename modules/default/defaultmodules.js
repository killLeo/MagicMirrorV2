/* Magic Mirror
 * Default Modules List
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */

// Modules listed below can be loaded without the 'default/' prefix. Omitting the default folder name.

var defaultModules = ["MMM-cryptocurrency", "calendar","MMM-CoinMarketCap", "clock", "compliments", "currentweather", "helloworld"];

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = defaultModules;
}
