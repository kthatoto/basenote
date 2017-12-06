import React, { Component } from 'react';
import { connect } from 'react-redux';

import { initCursor } from '../../../actions/vimActionCreator';
import Line from './Daily/Line';

class Daily extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayingDaily: {
        label: '',
        content: [],
      },
    };
  }
  componentDidMount() {
    document.activeElement.blur();
    const displayingDailyLabel = this.props.Terminal.currentDirectory.split('/')[2];
    const displayingDaily = this.props.Dailies.dailies.find(value => value.label == displayingDailyLabel);
    this.setState({ displayingDaily });

    this.addTabInvalidation();
    this.addEventInNormalMode();
    this.addFocusInvalidation();
    this.props.dispatch(initCursor());
  }
  componentWillUnmount() {
    this.removeTabInvalidation();
    this.removeEventInNormalMode();
    this.removeFocusInvalidation();
  }
  addFocusInvalidation() {
    const interfaceInput = document.querySelector(".interface__input");
    const blurInterface = () => {
      interfaceInput.blur();
    };
    interfaceInput.addEventListener('focus', blurInterface);
    this.setState({ blurInterface });
  }
  removeFocusInvalidation() {
    const interfaceInput = document.querySelector(".interface__input");
    interfaceInput.removeEventListener('focus', this.state.blurInterface);
  }
  addTabInvalidation() {
    document.onkeydown = e => {
      if (e.keyCode == 9) { return false; }
    };
  }
  removeTabInvalidation() {
    document.onkeydown = null;
  }
  addEventInCommandMode() {
    const listener = e => {
      if (this.props.Vim.mode == 'command') {
        const dispatch_type = this.detectDispatchTypeInCommandMode(e.keyCode);
        this.props.dispatch(dispatch_type);
        if (dispatch_type.category == 'submit') {
          document.removeEventListener('keydown', listener);
          this.props.dispatch({
            type: 'SAVE_DIRECTORY',
            directory: '/Dailies',
          });
        }
      }
    }
    document.addEventListener('keydown', listener);
  }
  detectDispatchTypeInCommandMode(keyCode) {
    switch(keyCode) {
      case 13:
        return {type: 'COMMAND_ENTER', category: 'submit'};
      default:
        return {type: 'ADD_CHAR_TO_COMMAND_LINE', category: 'command', char: String.fromCharCode(keyCode)};
    }
  }
  addEventInNormalMode() {
    const listener = e => {
      if (this.props.Vim.mode == 'normal') {
        const dispatch_type = this.detectDispatchTypeInNormalMode(e.keyCode);
        if (dispatch_type.category == 'move') {
          this.props.dispatch({
            type: dispatch_type.type,
            content: this.state.displayingDaily.content,
          });
        } else if (dispatch_type.category == 'mode') {
          this.props.dispatch({
            type: dispatch_type.type,
          });
          document.removeEventListener('keydown', listener);
          if (this.props.Vim.mode == 'insert') {
            this.addEventInInsertMode();
          } else if (this.props.Vim.mode == 'command') {
            this.addEventInCommandMode();
          }
        }
      }
    }
    document.addEventListener('keydown', listener);
    this.setState({ listener });
  }
  detectDispatchTypeInNormalMode(keyCode) {
    switch(keyCode) {
      case 72:
        return {type: 'H_MOVE', category: 'move'};
      case 74:
        return {type: 'J_MOVE', category: 'move'};
      case 75:
        return {type: 'K_MOVE', category: 'move'};
      case 76:
        return {type: 'L_MOVE', category: 'move'};
      case 73:
        return {type: 'INSERT_MODE', category: 'mode'};
      case 186:
        return {type: 'COMMAND_MODE', category: 'mode'};
      default:
        return {type: '', category: ''};
    }
  }
  removeEventInNormalMode() {
    document.removeEventListener('keydown', this.state.listener);
  }
  addEventInInsertMode() {
    const listener = e => {
      if (this.props.Vim.mode == 'insert') {
        const dispatch_type = this.detectDispatchTypeInInsertMode(e, e.keyCode);
        if (dispatch_type.category == 'insert') {
          this.props.dispatch({
            type: dispatch_type.type,
            content: this.state.displayingDaily.content,
          });
        } else if (dispatch_type.category == 'mode') {
          this.props.dispatch({
            type: dispatch_type.type,
          });
          document.removeEventListener('keydown', listener);
          if (this.props.Vim.mode == 'normal') {
            this.addEventInNormalMode();
          }
        }
      }
    }
    document.addEventListener('keydown', listener);
    this.setState({ listener });
  }
  detectDispatchTypeInInsertMode(e, keyCode) {
    if ((e.ctrlKey && keyCode == 219) || keyCode == 27) {
      return {type: 'NORMAL_MODE', category: 'mode'};
    }
    switch(keyCode) {
      default:
        return {type: 'INSERT', category: 'insert', char: keyCode};
    }
  }
  render() {
    let vimStatus;
    if (this.props.Vim.mode == 'insert') {
      vimStatus = <span className="-mode">-- insert --</span>;
    }
    return (
      <div className="daily">
        <div className="daily__dateLabel">
          <span>{this.state.displayingDaily.label}</span>
        </div>
        <div className="daily__content">
          {this.state.displayingDaily.content.map((lineContent, line) => {
            return <Line line={line + 1} string={lineContent.string} key={line} />
          })}
        </div>
        <div className="daily__statusLine">
          {vimStatus || this.props.Vim.statusLine}
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

export default connect(mapStateToProps)(Daily);
