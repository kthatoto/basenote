import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';

class MainDisplay extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(MainDisplay);
