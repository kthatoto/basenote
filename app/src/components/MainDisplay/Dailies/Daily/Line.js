import React, { Component } from 'react';
import { connect } from 'react-redux';

import Column from './Column';

class Line extends Component {
  render() {
    const cursoredLine = this.props.Vim.cursor.line == this.props.line;
    return (
      <div className="line">
        <span className="line__number">{this.props.line}</span>
        <div className="line__content">
          {this.props.string.split('').map((char, column) => {
            return <Column
              column={column + 1}
              char={char}
              key={column}
              cursoredLine={cursoredLine} />
          })}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps)(Line);
