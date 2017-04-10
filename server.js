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

// Define global data variable
var data;

function getRestaurants(latitude, longitude, radiusInput, typeInput) {
  googleMapsClient.placesNearby({
    language: 'en',
    location: [latitude, longitude],
    radius: radiusInput,
    type: typeInput,
    }, function(err, response) {
      if (!err) {
        data = response.json.results;
      }
    });
  // Send Data variable up to function
  return data;
}

// Send client data
app.get('/api/v1/data', function(req, res){
  // Worcester is 42.262593,-71.802293; rad = 8046.72 == 5mi
  res.send(getRestaurants(req.query.lat, req.query.lng, 8046.72, 'restaurant'));
});

// Runs on port 3000
app.listen(PORT, function() {
  console.log('Express server running on port ' + PORT);
});