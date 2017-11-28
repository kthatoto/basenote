import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitItem } from '../actions/itemActionCreator';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <input type="text" className="form__input" ref="inputText" />
        <button onClick={() => this.submitItem()} className="form__submit">submit</button>
      </div>
    );
  }

  submitItem() {
    const itemName = this.refs.inputText.value;
    this.props.submitItem(itemName);
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    submitItem: itemName => {
      dispatch(submitItem(itemName))
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
