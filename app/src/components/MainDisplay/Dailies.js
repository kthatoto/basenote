import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDailies } from '../../actions/dailiesActionCreator';

class Dailies extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDailies());
  }
  render() {
    return (
      <div className="dailies">
        {this.props.Dailies.dailies.map(daily => {
          return <div>{daily.name}</div>;
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Dailies);
