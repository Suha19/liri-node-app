require("dotenv").config();
var axios = require("axios");
const keys = require("./keys.js");
const ticketmaster = new ticketmaster(keys.ticketmaster);
const OMDb = new OMDb(keys.OMDb);
var fs = require("fs");

fs.readFile("movies.txt", "utf8", function(error, data) {
  if (error) {
    return console.log(error);
  }

  console.log(data);
  var dataArr = data.split(",");
  console.log(dataArr);

});
var spotify = new Spotify(keys.spotify);
 
var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});
 
spotify.search({ type: 'track', query: 'by Ace of Base' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
// ==============
OMPD 

var movieName = process.argv[2];
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=process.env.OMDb_Key";

console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Release Year: " + response.data.Year);
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);
// ==================

axios({
  method:'get',
  url:'https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/',
  responseType:'concerts'
})
  .then(function(response) {
  console.log(responde)
});




var options = {
  provider: "ticketmaster",
  apiKey: "https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/"
};

var concerts  = process.argv.slice(2).join(" ");

ticketmaster.ticketmaster(concerts , function(err, data) {
  console.log(JSON.stringify(data[0], null, 2));

  var concerts  = data[0];

  // Depending on what information is available for an concerts , build formatted search
  var search = "";

  if (concerts .name) {
    search += concerts .name;
  }

  if (concerts .location) {
    search += ", " + concerts .location;
  }

  if (concerts .date) {
    search += "mm/dd/yyyy " + concerts .data;
  }

  if (concerts .countryCode) {
    search += " " + concerts .countryCode;
  }

  concerts.find(function(err, result) {
    // If there is insufficient data, notify the user.
    if (err) {
      console.log("\r\n\r\n\r\n");

      console.log("Sorry we don't have enough data on that concerts! Try somewhere else.");

      console.log("\r\n\r\n\r\n");

      return;
    }

    // Then print the concerts information and complete concerts 
    console.log("\r\n\r\n\r\n");

    console.log("concerts " + search);

    
  });
});

