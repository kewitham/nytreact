var axios = require('axios');

// Geocoder API
var nytAPI = "9d4a8986921972b65754ea0809d47c84:12:74623931";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	// This function serves our purpose of running the query to geolocate. 
	runQuery: function(title){

		console.log(title);

		//Figure out the geolocation
		var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAPI + title;

		return axios.get(queryURL)
			.then(function(response){

				console.log(response);
				return response.data.results[0].formatted;
		})

	},

	// This function hits our own server to retrieve the record of query results
	getArticle: function(){

		return axios.get('/api')
			.then(function(response){

				console.log(response);
				return response;
			});
	},

	// This function posts new searches to our database.
	postArticle: function(location){

		return axios.post('/api', {location: location})
			.then(function(results){

				console.log("Posted to MongoDB");
				return(results);
			})
	}

}


// We export the helpers function 
module.exports = helpers;