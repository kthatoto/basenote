import React, { Component } from 'react';
import { connect } from 'react-redux';

class MenuItem extends Component {
  render() {
    const className =
      "menuItem" +
      (this.props.Terminal.currentDirectory.split('/')[1] == this.props.label ? ' -selected' : '');
    return (
      <div className={className}>
        {this.props.label}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(MenuItem);
