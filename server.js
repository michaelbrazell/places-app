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


// Define global data variable
var data;

function getRestaurants(locationInput, radiusInput, typeInput) {
  googleMapsClient.placesRadar({
    language: 'en',
    location: locationInput,
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
app.get('/data', function(req, res){
  res.send(getRestaurants([42.262593,-71.802293], 8046.72, 'restaurant'));
});
