import React, { Component } from 'react';
import { connect } from 'react-redux';

class Daily extends Component {
  render() {
    return (
      <div className="daily">test</div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps)(Daily);
