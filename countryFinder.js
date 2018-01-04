var express = require('express');
var app = express();
var fs = require('fs');
var parser = require('body-parser');
var ejs = require('ejs');
var path = require('path');
var svg = require('svg');

var readJSONFile = require('./lib/json-file-reader');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.use(express.static(__dirname));

function theCountry(callback) {
	app.get('/country/:ABC', function(request, response) {
		var countryCode = request.params.ABC;
		readJSONFile('./files/countries.json', function(parsedCountries, countryIndex, country) {
			var countryKeys = Object.entries(parsedCountries);
			for (i = 0; i < countryKeys.length; i++) {
				var countryIndex = countryKeys[i][0];
				if (countryCode === countryIndex) {
					var country = {
						'name': `${countryKeys[i][1].name}`,
						'native': `${countryKeys[i][1].nativeName}`,
						'pop': `${countryKeys[i][1].population}`,
						'region': `${countryKeys[i][1].region}`,
						'flag': `${countryKeys[i][1].flag}`
					}
					response.render('country', {
						name: country.name,
						native: country.native,
						pop: country.pop,
						region: country.region,
						flag: country.flag
					});	
				} 
			}		
			return callback(country);
		});
	});
};

theCountry(function (country) {
	console.log("Country search activate!");
});

// running Object.entries() in node returns an error stating its not a function
// so in CLI, type node --harmony for function to work

app.get('*', function(request, response) {
	response.status(400).send('Incorrect country code. Correct example path: /country/USA');
});

app.listen(1112, function() {
	console.log('example app is listening on port 1112');
});


