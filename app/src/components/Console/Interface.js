import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';

class Interface extends Component {
  componentDidMount() {

  }
  command() {
  }
  render() {
    return (
      <div className="interface">
        <div className="interface__prompt">$</div>
        <input type="text"
          className="interface__input"
          onKeyDown={this.command}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Interface);
