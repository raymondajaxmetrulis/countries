var express = require('express');
var app = express();
var fs = require('fs');
var parser = require('body-parser');
var hbs = require('hbs');


// code from Templates powerpoint
hbs.registerPartial('item', fs.readFileSync('./views/item.hbs', 'utf-8'));
app.set('view engine', 'hbs');

// code from Hou's theme-6-portfolio index.js 
app.use(express.static(__dirname));
app.get('/', function(request, response){
  response.render('countryFinder');
});

// var countryToFind = process.argv[2];

var readJSONFile = require('./lib/json-file-reader');


// readJSONFile('./files/countries.json', function(parsedCountries) {
	
// 	countryKeys = Object.entries(parsedCountries);
// 	// running Object.entries() in node returns an error stating its not a function
// 	// so in CLI, type node --harmony for function to work
	
// 	for (var i = 0; i < countryKeys.length; i++) {
// 		country = countryKeys[i][0];
// 		if (countryToFind === country) {
// 			console.log(
// 				`Name: ${countryKeys[i][1].name}\n
// 				Native Name: ${countryKeys[i][1].nativeName}\n
// 				Population: ${countryKeys[i][1].population}\n
// 				Region: ${countryKeys[i][1].region}\n
// 				Flag: ${countryKeys[i][1].flag}\n
// 				`);
// 		}
// 	}	
// });


// newCountry();


// next step:

app.get('/country/:ABC', function(request, response) {
	var countryCode = request.params.ABC;
	readJSONFile('./files/countries.json', function(parsedCountries) {
	
		var countryKeys = Object.entries(parsedCountries);
		// running Object.entries() in node returns an error stating its not a function
		// so in CLI, type node --harmony for function to work
		
		for (var i = 0; i < countryKeys.length; i++) {
			var countryIndex = countryKeys[i][0];
			if (countryCode === countryIndex) {
				var country = {
					'Name': `Name: ${countryKeys[i][1].name}`
				}
				console.log(`${country.Name}`)
				// console.log(
				// 	`Name: ${countryKeys[i][1].name}\n
				// 	Native Name: ${countryKeys[i][1].nativeName}\n
				// 	Population: ${countryKeys[i][1].population}\n
				// 	Region: ${countryKeys[i][1].region}\n
				// 	Flag: ${countryKeys[i][1].flag}\n
				// 	`);
				return response.send(`${country.Name}`);
			}
			
		}	
		
	});
	// var country = {
	// 	'YEM': 'Yemen',
	// 	'ZMB': 'Zambia'
	// }; // can put this var outside of function

	
});

app.get('*', function(request, response) {
	response.status(404).send('uh oh!');
});

app.listen(3001, function() {
	console.log('example app is listening on port 3001 ');
});


// Assignment___________________________________________________________________________

// Create an Express route that, given a path that contains that country's 3 char code, i.e. /country/usa, displays a page that shows all of the country info. 
// You'll need to render the English language name, native name, population, region, and show a picture of the flag by passing the country to res.render. 
// This page should be somewhat styled.

// You should also render an error page if they provide an incorrect country, 400 is a good response code for this.

// This assignment should reuse your portfolio site, or at least use a template in addition to rendering the country, using view includes.

// Grading Criteria:__________________________________________________________________

// The program runs an Express server on localhost
// The Express server listens in on some path that contains a country code (i.e. /country/usa, /country/RUS)
// All of the country's information is rendered in HTML at the specified URL
// The country's information is rendered inside of a template, not just one file for everything
// The HTML is at least a little bit styled
// Requesting an invalid country path renders an error with a 4XX status code (i.e. /country/zimbabwe)
// There are no javascript errors while the application runs
// Submit the assignment as a link to a github project.

// Bonus: If you set the query (Links to an external site.)Links to an external site. to ?json=1, make it output JSON (Links to an external site.)Links to an external site. instead of a page

// Bonus: Make a page that lists all of the countries, and links to their pages