import React, { Component } from 'react';
import { connect } from 'react-redux';

import Calendar from './Console/Calendar';
import OutputScreen from './Console/OutputScreen';
import Interface from './Console/Interface';

class Console extends Component {
  render() {
    return (
      <div className="console">
        <Calendar />
        <div className="terminal">
          <OutputScreen />
          <Interface />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Console);
