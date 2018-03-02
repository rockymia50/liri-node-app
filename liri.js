require("dotenv").config();

var fs = require("fs");
var keys = require("./keys");
 var Twitter = require('twitter');
//  var client = new Twitter(keys.twitter);

 var params = {screen_name: 'rocketsweeper'
};

 
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});



// This block of code will read from the "keys.js" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("keys.js", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }


});