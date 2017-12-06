import React, { Component } from 'react';
import { connect } from 'react-redux';

class DailyItem extends Component {
  render() {
    const daily = this.props.daily;
    const year  = daily.label.split('-')[0];
    const month = daily.label.split('-')[1];
    const date  = daily.label.split('-')[2];
    const className = "dailyItem" + (daily.focused ? ' -focused' : '');
    return (
      <div className={className}>
        {year}-
        {month}-
        {date}
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
