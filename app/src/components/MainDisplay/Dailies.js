import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dailies extends Component {
  render() {
    return (
      <div className="dailies">
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Dailies);
