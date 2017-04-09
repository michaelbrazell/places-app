var React = require('react');
var axios = require('axios');

const GET_RESTAURANTS = 'http://localhost:3000/data';

const Restaurants = React.createClass({
  getInitialState: function () {
    return {
      restaurants: []
    }
  },
  componentDidMount: function () {
    var that = this;
    var requestUrl = `${GET_RESTAURANTS}`;
    this.setState({
      restaurants:[]
    });
    axios.get(requestUrl)
    .then(function(response){
      that.setState({
        restaurants: response.data
      })
    })
  },
  render: function () {
    let restaurants = this.state.restaurants.map(function(restaurant, i) {
      return (
        <li key={i}><strong>{restaurant.name}</strong>, Rating: {restaurant.rating} </li>
      )
    })
    return (
      <span>
        {restaurants}
      </span>
    )
  }
});

module.exports = Restaurants;