import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';

class MenuItem extends Component {
  render() {
    const className = "menuItem" + (this.props.title == 'Dailies' ? ' -selected' : '');
    return (
      <div className={className}>
        {this.props.title}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(MenuItem);
