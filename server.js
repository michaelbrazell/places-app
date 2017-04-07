// Requires JS and allows app to use Express API with the var express
var express = require('express');

// Require Google Maps
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAUhxA76NOJrNMFi5mcGAkX7h5UieAWXic'
});

// Create our app
var app = express();
const PORT = process.env.PORT  || 3000;

/*
  OpenWeatherMap doesnt' work on HTTPS so we have to Redirect HTTP traffic
  This is express middleware, expecting a request, response, and next
*/
app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
})

// Call which folder to use, express starts static server, serving the directory "public"
app.use(express.static('public'));

// Runs on port 3000
app.listen(PORT, function() {
  console.log('Express server running on port ' + PORT);
});

function getRestaurants() {
  var data;
  googleMapsClient.placesNearby({
    language: 'en',
    location: [42.262593,-71.802293],
    rankby: 'distance',
    minprice: 1,
    maxprice: 4,
    opennow: true,
    type: 'restaurant'
    }, function(err, response) {
      if (!err) {
        console.log(response.json.results)
        data = response;
      }
    });
  return data;
} 

// Log something to console from get
app.get('/data', function(req, res){
  res.send(getRestaurants());
});

// Create API for displaying Data

// Grab a place

