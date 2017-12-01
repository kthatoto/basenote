import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';

import Calendar from './Console/Calendar';
import Interface from './Console/Interface';

class Console extends Component {
  render() {
    return (
      <div className="console">
        <Calendar />
        <Interface />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Console);
