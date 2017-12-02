import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';

class Interface extends Component {
  componentDidMount() {
    this.refs.line.focus();
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 || (e.ctrlKey && e.keyCode == 219)) {
        this.refs.line.focus()
      }
    });
  }
  command(e) {
    if (e.keyCode == 13) {
      let line = this.refs.line;
      const command = line.value;
      line.value = '';
    }
  }
  complement(e) {
    alert(123);
    this.refs.line.focus();
  }
  render() {
    return (
      <div className="interface">
        <div className="interface__prompt">$</div>
        <input type="text"
          className="interface__input"
          ref="line"
          onKeyDown={(e) => this.command(e)}
        />
        <input type="text"
          className="interface__input -sub"
          onFocus={(e) => this.complement(e)} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Interface);
