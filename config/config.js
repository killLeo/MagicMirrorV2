/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "MMM-cryptocurrency",
			position: "top_left",
			config: {
				apikey: 'c80092e3-52a4-4302-969d-a421b38cd872',
				currency: ['ethereum', 'bitcoin'],
				conversion: 'EUR',
				headers: ['change24h', 'change1h', 'change7d'],
				displayType: 'logoWithChanges',
				showGraphs: true
			}
		},
		{
			module: "newsfeed",
			position: "top_center",
			config: {
				feeds: [
					{
						title: "Le Monde",
						url: "https://www.lemonde.fr/rss/une.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},	
		

		{
         		module: "MMM-CoinMarketCap",
         		position: "top_left",
   			header: "cryptooo",
        		config: {
              			apiKey: 'c80092e3-52a4-4302-969d-a421b38cd872',
               			currencies: ['bitcoin', 'ethereum', 'litecoin', 'ripple','Polkadot','eos'],
              			view: 'graphWithChanges',
             			conversion: "EUR",
           		 }
      		},
       
		{
			module: 'MMM-Paris-RATP-PG',
			position: 'bottom_right',
			header: 'Connections',
			config: {
				lines: [
					  {type: 'buses', line: 148, stations: 'lieutenant+lebrun', destination: 'A+R', firstCellColor: '#0055c8'},
					  {type: 'buses', line: 146, stations: 'lieutenant+lebrun', destination: 'A+R', firstCellColor: '#dc9600'},
					  {type: 'metros', line: '5', stations: 'bobigny+pablo+picasso', destination: 'A+R', label: '5', firstCellColor: '#6ECA97'},
				]
			}
    		},
		{
		     module: 'MMM-Ratp',
		     position: 'bottom_right',
		     header: 'Bus 148', // the title that will be displayed on top on the widget
		     config:{
			 apiURL:'https://api-ratp.pierre-grimaud.fr/v3/schedules/bus/148/lieutenant+lebrun/A+R', // more info about API documentation : https://github.com/pgrimaud/horaires-ratp-api
			     
			}
		},
    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
