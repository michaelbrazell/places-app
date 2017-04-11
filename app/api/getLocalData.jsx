var axios = require('axios');

const GET_RESTAURANTS = '/api/v1/data';

module.exports = {
  getData: function (latitude, longitude) {
    var requestUrl = `${GET_RESTAURANTS}?lat=${latitude}&lng=${longitude}`;
    return axios.get(requestUrl).then(function(response){
      if (response) {
        return response
      } else {
        console.log('Some error happened at the API level');
      }
    }) 
  }
}