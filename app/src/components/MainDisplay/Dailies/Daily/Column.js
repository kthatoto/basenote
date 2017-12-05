import React, { Component } from 'react';
import { connect } from 'react-redux';

class Column extends Component {
  render() {
    const className = "line__column" + (
      this.props.cursoredLine &&
      this.props.Vim.cursor.column == this.props.column ? ' -cursor' : '');
    return (
      <span className={className}>{this.props.char}</span>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps)(Column);
