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
        <div className="col-xs-12 col-sm-6 col-md-4" key={'result_' + i}>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h5>{restaurant.name} <span className={restaurant.rating >= 4 ? 'label label-success' : 'label label-warning'}>{restaurant.rating}</span></h5>
            </div>
            <div className="panel-body"><address>{restaurant.formatted_address}</address></div>
          </div>
         </div>
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