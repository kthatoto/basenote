import React, { Component } from 'react';
import { connect } from 'react-redux';

class OutputScreen extends Component {
  render() {
    return (
      <div className="outputScreen">
        {this.props.Terminal.output}
        <div className="outputScreen__prompt">
          <span className="outputScreen__prime">{this.props.Terminal.prime}</span>
          <span className="outputScreen__currentDirectory">:{this.props.Terminal.currentDirectory}</span>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(OutputScreen);
