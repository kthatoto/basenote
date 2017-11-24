import React from 'react';
import ReactDOM from 'react-dom';

export class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <ul>
          <li onClick={() => this.props.onClick(0)}>Tasks</li>
          <li onClick={() => this.props.onClick(1)}>Projects</li>
          <li onClick={() => this.props.onClick(2)}>Scraps</li>
        </ul>
      </div>
    );
  }
}
