import React, { Component } from 'react';
import { connect } from 'react-redux';

import Line from './Daily/Line';

class Daily extends Component {
  componentDidMount() {
    document.activeElement.blur();
    this.addTabInvalidation();
    this.addEventInNormalMode();
    this.addFocusInvalidation();
  }
  componentWillUnmount() {
    this.removeTabInvalidation();
    this.removeEventInNormalMode();
    this.removeFocusInvalidation();
  }
  addFocusInvalidation() {
    const interface = document.querySelector(".interface__input");
    const blurInterface = () => {
      interface__input.blur();
    };
    interface.addEventListener('focus', blurInterface);
    this.setState({ blurInterface });
  }
  removeFocusInvalidation() {
    const interface = document.querySelector(".interface__input");
    interface.removeEventListener('focus', this.state.blurInterface);
  }
  addTabInvalidation() {
    document.onkeydown = e => {
      if (e.keyCode == 9) { return false; }
    };
  }
  removeTabInvalidation() {
    document.onkeydown = null;
  }
  addEventInNormalMode() {
    const listener = e => {
      if (this.props.Vim.mode == 'normal') {
        const dispatch_type = this.detectDispatchTypeInNormalMode(e.keyCode);
        if (dispatch_type.category == 'move') {
          this.props.dispatch({
            type: dispatch_type.type,
            content: this.props.Dailies.daily.content,
          });
        } else if (dispatch_type.category == 'mode') {
          this.props.dispatch({
            type: dispatch_type.type,
          });
          document.removeEventListener('keydown', listener);
          if (this.props.Vim.mode == 'insert') {
            this.addEventInInsertMode();
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
            content: this.props.Dailies.daily.content,
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
    return (
      <div className="daily">
        <div className="daily__dateLabel">
          <span>{this.props.date}</span>
        </div>
        <div className="daily__content">
          {this.props.Dailies.daily.content.map((lineContent, line) => {
            return <Line line={line + 1} string={lineContent.string} key={line} />
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

export default connect(mapStateToProps)(Daily);
