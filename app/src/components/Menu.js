import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';
import MenuItem from './Menu/MenuItem';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <MenuItem label="Dailies" />
        <MenuItem label="Projects" />
        <MenuItem label="Tasks" />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Menu);
