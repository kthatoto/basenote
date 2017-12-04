import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDailies, shiftFocus } from '../../actions/dailiesActionCreator';
import DailyItem from './Dailies/DailyItem'

class Dailies extends Component {
  componentDidMount() {
    this.props.dispatch(fetchDailies());
    document.activeElement.blur();
    const listener = e => {
      if (e.keyCode == 74) {
        this.props.dispatch(shiftFocus(true));
      }
      if (e.keyCode == 75) {
        this.props.dispatch(shiftFocus(false));
      }
    };
    document.addEventListener('keydown', listener);
    this.setState({ listener });
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.state.listener);
  }
  render() {
    return (
      <div className="dailies">
        {this.props.Dailies.dailies.map(daily => {
          return <DailyItem daily={daily} key={daily.id} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dailies);
