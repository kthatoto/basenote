import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';

import Calendar from './Console/Calendar';
import ResultScreen from './Console/ResultScreen';
import Interface from './Console/Interface';

class Console extends Component {
  render() {
    return (
      <div className="console">
        <Calendar />
        <div className="terminal">
          <ResultScreen />
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
