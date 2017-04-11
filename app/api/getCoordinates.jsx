var axios = require('axios');

const GET_ADDRESS = '/api/v1/address';

module.exports = {
  getCoordinates: function (address) {
    var requestUrl = `${GET_ADDRESS}?location=${address}`;
    return axios.get(requestUrl).then(function(response){
      if (response) {
        return response
      } else {
        console.log('Some error happened at the API level');
      }
    }) 
  }
}