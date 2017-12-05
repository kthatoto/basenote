import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDailies, shiftFocus } from '../../actions/dailiesActionCreator';
import { changeDirectory } from '../../actions/directoriesActionCreator';
import DailyItem from './Dailies/DailyItem';
import Daily from './Dailies/Daily';

class Dailies extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDailies());
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
        this.props.dispatch(changeDirectory(focusedDaily.year + '-' + focusedDaily.month + '-' + focusedDaily.date));
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
    if (this.props.Terminal.currentDirectory.split('/').length <= 2) {
      return (
        <div className="dailies">
          {this.props.Dailies.dailies.map(daily => {
            return <DailyItem daily={daily} key={daily.id} />
          })}
        </div>
      );
    } else {
      return (
        <Daily />
      );
    }
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dailies);
