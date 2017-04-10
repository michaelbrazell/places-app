var React = require('react');
var axios = require('axios');
var Restaurant = require('Restaurant');
var Search = require('Search');

const GET_RESTAURANTS = 'http://localhost:3000/api/v1/data';
var latitude, longitude, someVariable;

const Restaurants = React.createClass({
  getInitialState: function () {
    // Set initial state as WOrcester
    return {
      restaurants: [],
      latitude: '42.262593',
      longitude: '-71.802293'
    }
  },
  handleSearch: function (lat, long) {
    var that = this;
    console.log('On Search Fired with lat: ' + lat + ', Long: ' + long);
    this.setState({
      latitude: lat,
      longitude: long
    })
    // This is Messy, Takes multiple clicks for props/state to update
    console.log('Updated State of Latitude in Handle Search: ' + this.state.latitude)
    var newRequestUrl = `${GET_RESTAURANTS}?lat=${this.state.latitude}&lng=${this.state.longitude}`;
    console.log(newRequestUrl);
    axios.get(newRequestUrl)
    .then(function(response){
      that.setState({
        restaurants: response.data
      })
    })
  },
  componentDidMount: function () {
    var that = this;
    var requestUrl = `${GET_RESTAURANTS}?lat=${this.state.latitude}&lng=${this.state.longitude}`;
    console.log('In Component Did Mount, latitude is: ' + this.state.latitude + ', Longitude: ' + this.state.longitude);
    axios.get(requestUrl)
    .then(function(response){
      that.setState({
        restaurants: response.data
      })
    })
  },
  componentWillReceiveProps: function (newProps) {
    // This is Messy
    var latitude = newProps.latitude;
    var longitude = newProps.longitude;
    this.handleSearch(latitude, longitude);
  },
  render: function () {
    let restaurants = this.state.restaurants.map(function(restaurant, i) {
      return (
        <Restaurant key={i} name={restaurant.name} rating={restaurant.rating} vicinity={restaurant.vicinity} />
      )
    })
    return (
      <div>
        <div className="row">
          <Search onSearch={this.handleSearch} />
        </div>
        <div className="row">
          {restaurants}
        </div>
      </div>
    )
  }
});

module.exports = Restaurants;