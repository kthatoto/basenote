import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';
import MenuItem from './Menu/MenuItem';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <MenuItem title="Dailies" />
        <MenuItem title="Projects" />
        <MenuItem title="Tasks" />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Menu);
