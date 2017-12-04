import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';

class OutputScreen extends Component {
  render() {
    return (
      <div className="outputScreen">
        {this.props.Terminal.output}
        <div className="outputScreen__currentDirectory">
          {this.props.Terminal.currentDirectory}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(OutputScreen);
