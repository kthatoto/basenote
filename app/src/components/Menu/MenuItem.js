import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';

class MenuItem extends Component {
  render() {
    return (
      <div className="menuItem">
        {this.props.title}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(MenuItem);
