import React, { Component } from 'react';
import { connect } from 'react-redux';

import { submitItem } from '../actions/itemActionCreator';

class Form extends Component {
  render() {
    // mapStateToProps で紐付けしていることに注意
    //const { flag, text, number } = this.props;
    return (
      <div>
        <input type="text" className="form__input" ref="inputText" />
        <button onClick={() => this.submitItem()} className="form__submit">submit</button>
      </div>
    );
  }

  submitItem() {
    const itemName = this.refs.inputText.getDOMNode().value;
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
