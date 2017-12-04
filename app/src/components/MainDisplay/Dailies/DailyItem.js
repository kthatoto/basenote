import React, { Component } from 'react';
import { connect } from 'react-redux';

class DailyItem extends Component {
  render() {
    return (
      <div className="dailyItem">
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps)(DailyItem);
