import React from 'react';
import ReactDOM from 'react-dom';

export class Projects extends React.Component {
  renderSquare() {
    return (
      <li>projects</li>
    );
  }
  render() {
    return (
      <div>
        <ul>
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
          {this.renderSquare()}
        </ul>
      </div>
    );
  }
}
