var fs = require('fs');

var countryToFind = process.argv[2];

var readJSONFile = require('./lib/json-file-reader');

readJSONFile('./files/countries.json', function(parsedCountries) {
	for(var i = 0; i < parsedCountries.length; i++) {

    	country = parsedCountries[i]; 

	    if(countryToFind.toLowerCase() === country.toLowerCase()) {

	      return console.log(
	      	`Country: ${country.name}\n
	      	Native Name: ${country.nativeName}\n
	      	Population: ${country.population}\n
	      	Region: ${country.region}`);
	    }
	}

	console.log(`Country ${countryToFind} does not exist`);
});