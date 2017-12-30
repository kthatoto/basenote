import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import MainDisplay from './MainDisplay';
import Menu from './Menu';
import Console from './Console';

class App extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="app">
        <MainDisplay />
        <Menu />
        <Console />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
