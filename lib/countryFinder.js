var readJSONFile = require('./lib/json-file-reader');
var express = require('express');
var app = express();

// function allCountries: readJSONFile parsed countries
//	define countriesArr as Object.entries(parsedCountries)

function allCountries() {
	readJSONFile('./files/countries.json', function(parsedCountries) {
		var countriesArr = Object.entries(parsedCountries);
	});
};

cntry = new allCountries();
console.log(countriesArr);
// prototype pickCountry: user request in query
//				define 3 char key, app.get

// prototype findCountry: for loop
// 	define countryKeys as countryArr[i][0];
// define countryInfo as countryArr[i][1];

// prototype theCountry:
//	if request equals countryKeys
// 	then define name, native, pop, region, flag 




// function theCountry() {
	
// 	this.whatCountry = function() {
// 		app.get('/country/:ABC', function(request, response) {
// 		var countryCode = request.params.ABC;
// 			readJSONFile('./files/countries.json', function(parsedCountries) {
	
// 				countryKeys = Object.entries(parsedCountries);
// 				// console.log(parsedCountries);
// 		// for (var i = 0; i < countryKeys.length; i++) {
// 		// 	var countryIndex = countryKeys[i][0];
// 		// 	if (countryCode === countryIndex) {
// 		// 		var country = {
// 		// 			'name': `${countryKeys[i][1].name}`,
// 		// 			'native': `${countryKeys[i][1].nativeName}`,
// 		// 			'pop': `${countryKeys[i][1].population}`,
// 		// 			'region': `${countryKeys[i][1].region}`,
// 		// 			'flag': `${countryKeys[i][1].flag}`
// 		// 		}
// 		// 		return response.send(`
// 		// 			English Name: ${country.name}\n
// 		// 			Native Name: ${country.native}\n
// 		// 			Population: ${country.pop}\n
// 		// 			Region: ${country.region}\n
// 		// 			`);
// 		// 		// return response.render(`${country.flag}`);
// 		// 	} 
// 		// }		
// 			});
// 		});
// 	}
// };
// cntry = new theCountry();
// cntry.whatCountry();

