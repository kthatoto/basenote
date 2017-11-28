import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Form from './Form';
import ItemList from './ItemList';

class App extends Component {
  componentDidMount() {
    axios.get('http://0.0.0.0:3000/check').then((response) => {
      console.log(response);
    }).catch((response) => {
      console.log(response);
    });
  }
  render() {
    return (
      <div>
        <Form />
        <ItemList />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
