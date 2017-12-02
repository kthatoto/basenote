import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';

class ResultScreen extends Component {
  render() {
    return (
      <div className="resultScreen">{}</div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ResultScreen);
