require("dotenv").config();
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);


var options = {
  provider: "spotify",
//   apiKey: "https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/"
};

// Get all elements in process.argv, starting from index 2 to the end
// Join them into a string to get the space delimited concerts 
var concerts  = process.argv.slice(2).join(" ");

// Then use the Google spotify to spotify the concerts 
spotify.spotify(concerts , function(err, data) {
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

axios({
    method:'get',
    url:'http://www.omdbapi.com/?i=tt3896198&apikey=OMDb_Key',
    responseType:'stream'
  })
    .then(function(response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });
