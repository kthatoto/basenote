import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import Form from './components/Form';

import './styles/main.scss';

class App extends React.Component {
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
        <div className="list">
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
