require("dotenv").config();
var axios = require("axios");
const keys = require("./keys.js");

var search= process.argv[2];
var searchTerm= process.argv.slice(3).join(" ");
console.log(search)
console.log(searchTerm)

function searchTicketMaster(searchTerm){

    var URL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + searchTerm +"&apikey=" +keys.ticketmaster.id;
    axios.get(URL)
    .then(function(response){
        var searchResult = response.data._embedded.events;
        for (var i =0; i <searchResult.length; i++){
            console.log("Name of venue: "+ searchResult[i]._embedded.venues[0].name)
            console.log("Location of venue: "+ searchResult[i]._embedded.venues[0].city.name)
            console.log("date of venue: "+ searchResult[i].dates.start.localDate)
            console.log("\n")

        }
    })

}

function searchSpotify(searchTerm){

    var URL = "https://open.spotify.com/album/3a0UOgDWw2pTajw85QPMiz" + searchTerm +"&apikey=" +keys.spotify.id;
    axios.get(URL)
    .then(function(response){
        var searchResult = response.data._embedded.events;
        for (var i =0; i <searchResult.length; i++){
            console.log("Name of venue: "+ searchResult[i]._embedded.venues[0].name)
            console.log("Location of venue: "+ searchResult[i]._embedded.venues[0].city.name)
            console.log("date of venue: "+ searchResult[i].dates.start.localDate)
            console.log("\n")

        }
    })

}


if (search === "search-events"){
    searchTicketMaster(searchTerm);   
}

else if (search ==="search-events"){
    searchSpotify(searchTerm);
}