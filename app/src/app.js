import React from 'react';
import ReactDOM from 'react-dom';

import axiox from 'axios';

import './styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
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
