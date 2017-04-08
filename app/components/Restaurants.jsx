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
        restaurants: response
      })
    })
  },
  render: function () {
    console.log(this.state.restaurants);
    return (
      <div className="restaurant-list">
        <h1>This will be a list of restaurants</h1>  
      </div>
    )
  }
});

module.exports = Restaurants;