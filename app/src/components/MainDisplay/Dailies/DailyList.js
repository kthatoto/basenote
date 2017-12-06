import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDailies, shiftFocus } from '../../../actions/dailiesActionCreator';
import { changeDirectory } from '../../../actions/directoriesActionCreator';
import DailyItem from './DailyItem';

class DailyList extends Component {
  componentDidMount() {
    //this.props.dispatch(fetchDailies());
    document.activeElement.blur();
    this.addEventToShiftFocus();
  }
  componentWillUnmount() {
    this.removeEventToShiftFocus();
  }
  addEventToShiftFocus() {
    const listener = e => {
      if (e.keyCode == 74) {
        this.props.dispatch(shiftFocus(true));
      }
      if (e.keyCode == 75) {
        this.props.dispatch(shiftFocus(false));
      }
      if (e.keyCode == 13) {
        const focusedDaily = this.props.Dailies.dailies.find(daily => daily.focused);
        const year  = focusedDaily.label.split('-')[0];
        const month = focusedDaily.label.split('-')[1];
        const date  = focusedDaily.label.split('-')[2];
        this.props.dispatch(changeDirectory(year + '-' + month + '-' + date));
        this.removeEventToShiftFocus();
      }
    };
    document.addEventListener('keydown', listener);
    this.setState({ listener });
  }
  removeEventToShiftFocus() {
    document.removeEventListener('keydown', this.state.listener);
  }
  render() {
    return (
      <div className="dailyList">
        {this.props.Dailies.dailies.map(daily => {
          return <DailyItem daily={daily} key={daily.label} />
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(DailyList);
