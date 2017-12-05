import React, { Component } from 'react';
import { connect } from 'react-redux';

import MenuItem from './Menu/MenuItem';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <MenuItem label="Dailies" />
        <MenuItem label="Projects" />
        <MenuItem label="Tasks" />
        <MenuItem label="Books" />
        <MenuItem label="Pictures" />
        <MenuItem label="Notes" />
        <MenuItem label="Ideas" />
        <MenuItem label="Pages" />
        <MenuItem label="Scraps" />
        <MenuItem label="Snippets" />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Menu);
