require("dotenv").config();

var fs = require("fs");
var keys = require("./keys");

// console log arguments here
console.log(process.argv)
var inputArgument = process.argv[2]; // spotify, twitter, imdb-api

var params = {
    screen_name: 'rocketsweeper'
};

function searchSpotify(searchSpotify) {
    // Spotify
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(keys.spotify);
    var spotifytwo = new Spotify(randomn.spotifytwo)

    spotify.search({
        type: 'track',
        query: searchString
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var item = data.tracks.items[0]

        console.log(item);
        // log artist name, album name, song name, and preview link     
        // TODO
    });
}

if (inputArgument == "spotify") {
    searchSpotify(inputArgument2);


} else if (inputArgument == "twitter") {
    // Twitter 
    var Twitter = require('twitter');
    var client = new Twitter(keys.twitter);

    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });
} else if (inputArgument == "imdb-api") {
    // Imdb
    const imdb = require('imdb-api')
   
    if  (true){
        imdb.search({
            title: 'Batman'
        }, 
        {
            apiKey: 'trilogy', timeout: 30000
        })
        .then(console.log).catch(console.log);

    } else {
        imdb.get('Mr.Nobody', {
            apiKey: `trilogy`,
            timeout: 30000
        })
        .then(console.log).catch(console.log);
    };
    

} else if (inputArgument == "spotifyTwo") {
    // SpotifyTwo


}





// This block of code will read from the "keys.js" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("keys.js", "utf8", function (error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
        return console.log(error);
    }

    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }



    //   var html = '<div class="tweet">TWEET_IMGTWEET_TEXT';

    //   // append tweets into page
    //   for (var i = 0; i < data.length; i++) {

    //       $(params.appendTo).append(
    //           html.replace('TWEET_TEXT', params.ify.clean(data[i].text))
    //               .replace(/USER/g, data[i].user.screen_name)
    // .replace('TWEET_IMG', (data[i].entities.media && data[i].entities.media.length ? '<img src="' + data[i].entities.media[0].media_url + '"/>': ''))
    //       );

    //   }					

});