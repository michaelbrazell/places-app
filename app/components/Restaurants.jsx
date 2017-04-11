var React = require('react');
var axios = require('axios');
var Restaurant = require('Restaurant');
var Search = require('Search');
var getLocalData = require('getLocalData');

const Restaurants = React.createClass({
  getInitialState: function () {
    return {
      restaurants: [],
      // Probably don't need
      latitude: '42.262593',
      longitude: '-71.802293'
    }
  },
  handleSearch: function (latitude, longitude) {
    var that = this;
    this.setState({
      latitude: undefined,
      longitude: undefined
    })
    getLocalData.getData(latitude, longitude).then(function (response) {
      that.setState({
        latitude: latitude,
        longitude: longitude,
        restaurants: response.data
      });
    })
  },
  componentDidMount: function () {
    //
  },
  componentWillReceiveProps: function (newProps) {
    // This is Messy
    var latitude = newProps.latitude;
    var longitude = newProps.longitude;
    this.handleSearch(latitude, longitude);
  },
  render: function () {
    var {latitude, longitude, localData} = this.state;
    let restaurantsList = this.state.restaurants.map(function(restaurant, i) {
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
          {restaurantsList}
        </div>
      </div>
    )
  }
});

module.exports = Restaurants;