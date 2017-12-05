import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDailies, shiftFocus } from '../../actions/dailiesActionCreator';
import { changeDirectory } from '../../actions/directoriesActionCreator';
import DailyList from './Dailies/DailyList';
import Daily from './Dailies/Daily';

class Dailies extends Component {
  render() {
    if (this.props.Terminal.currentDirectory.split('/').length <= 2) {
      return (
        <DailyList />
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
