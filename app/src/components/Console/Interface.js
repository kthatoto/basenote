import React, { Component } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';

import RootBin from '../../bin/RootBin';

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
      const line = this.refs.line;
      const command = line.value;
      line.value = '';
      RootBin.processCommand(command, this.props.dispatch);
    }
  }
  complement(e) {
    const line = this.refs.line;
    line.focus();
    const command = line.value.split(" ").filter(value => value);

    const elms = ["projects", "protests", "products", "calendar"];

    // 最初のコマンドではなく引数が補完対象になった時
    if (command.length > 1) {
      const lastArgument = command[command.length - 1];
      const filteredOptions = elms.filter(value => value.startsWith(lastArgument));
      if (filteredOptions.length > 1) {
        //一部補完
      } else if (filteredOptions.length == 1) {
        //補完候補が一つに絞られた時
        line.value = line.value.slice(0, line.value.lastIndexOf(lastArgument)) + filteredOptions[0];
      }
    }
  }
  render() {
    return (
      <div className="interface">
        <div className="interface__prompt">$</div>
        <input type="text"
          className="interface__input"
          ref="line"
          onKeyDown={(e) => this.command(e)} />
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
function mapDispatchToProps(dispath) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps)(Interface);
