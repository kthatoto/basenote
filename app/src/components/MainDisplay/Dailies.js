import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        <Daily date={this.props.Terminal.currentDirectory.split('/')[2]} />
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
