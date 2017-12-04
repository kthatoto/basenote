import React, { Component } from 'react';
import { connect } from 'react-redux';

class Calendar extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Calendar);
