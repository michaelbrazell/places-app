var React = require('react');

const Search = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    var latitude = this.refs.latitude.value;
    var longitude = this.refs.longitude.value;
    this.props.onSearch(latitude, longitude);
  },
  render: function () {
    return (
      <div className="col-xs-12">
        <div className="well">
            <form onSubmit={this.onFormSubmit}>
              <fieldset>
              <legend>Search</legend>
              <div className="row">
                <div className="form-group col-xs-12 col-sm-6 col-lg-5">
                    <input type="text" className="form-control" id="inputLat" placeholder="Latitude" ref="latitude" autoComplete="off"/>
                </div>
                <div className="form-group col-xs-12 col-sm-6 col-lg-5">
                  <input type="text" className="form-control" id="inputLong" placeholder="Longitude" ref="longitude" autoComplete="off"/>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-2 text-center">
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
              </div>
              </fieldset>
            </form>
          
        </div>
      </div>
    )
  }
});

module.exports = Search;