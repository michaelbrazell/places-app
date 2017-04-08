var React = require('react');
var axios = require('axios');

const GET_RESTAURANTS = '/data';

const Restaurants = React.createClass({
  getInitialState: function () {
    return {
      restaurants: []
    }
  },
  componentDidMount: function () {
    return {
      restaurants: []
    }
  },
  render: function () {
    return (
      <div className="restaurant-list">
        <h1>This will be a list of restaurants</h1>  
      </div>
    )
  }
});

module.exports = Restaurants;