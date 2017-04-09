var React = require('react');
var Restaurants = require('Restaurants');

var Main = (props) => {
  return (
    <div>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          <p>Main.jsx Rendered</p>
          <ul>
            <Restaurants />
          </ul>
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
