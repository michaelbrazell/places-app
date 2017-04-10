var React = require('react');

const Restaurant = React.createClass({
  render: function () {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4" key={'result_' + this.props.key}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h5>{this.props.name} <span className={this.props.rating >= 4 ? 'label label-success' : 'label label-warning'}>{this.props.rating}</span></h5>
          </div>
          <div className="panel-body"><address>{this.props.vicinity}</address></div>
        </div>
      </div>
    )
  }
});

module.exports = Restaurant;