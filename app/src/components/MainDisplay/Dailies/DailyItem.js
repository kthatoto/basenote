import React, { Component } from 'react';
import { connect } from 'react-redux';

class DailyItem extends Component {
  render() {
    const daily = this.props.daily;
    const className = "dailyItem" + (daily.focused ? ' -focused' : '');
    return (
      <div className={className}>
        {daily.year}-
        {daily.month}-
        {daily.date}
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
