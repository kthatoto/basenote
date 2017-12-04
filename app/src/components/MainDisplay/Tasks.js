import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tasks extends Component {
  render() {
    return (
      <div className="tasks">
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Tasks);
