/* Magic Mirror
 * Default Modules List
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 */

// Modules listed below can be loaded without the 'default/' prefix. Omitting the default folder name.

var defaultModules = ["MMM-cryptocurrency", "alert", "calendar","MMM-CoinMarketCap", "clock", "compliments", "currentweather", "helloworld", "weatherforecast", "updatenotification", "weather"];

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = defaultModules;
}
