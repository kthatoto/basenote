import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import './styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  componentDidMount() {
    axios.get('http://0.0.0.0:3000/check').then((response) => {
      console.log(response);
    }).catch((response) => {
      console.log(response);
    })
  }
  render() {
    return (
      <div>value: {this.state.value}</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
