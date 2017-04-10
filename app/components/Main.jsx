var React = require('react');
var Restaurants = require('Restaurants');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <Restaurants />
      </div>
    </div>
  );
}

module.exports = Main;
