import React, { Component } from "react"
import { connect } from 'react-redux'

import { submitItem } from "../actions/items"

class Form extends Component {
  render() {
    // mapStateToProps で紐付けしていることに注意
    //const { flag, text, number } = this.props;
    return (
      <div>
        <input type="text" className="form__input" ref="inputText" />
        <input type="submit" className="form__submit" value="submit" />
      </div>
    )
  }

  submitButtonClicked(e) {
    const itemName = this.refs.inputText.getDOMNode().value;
    dispatch(submitItem(itemName));
  }
}

// function mapStateToProps(state) {
//   const { flag, text, number } = state;
//   return {
//     flag,
//     text,
//     number
//   }
// }

// react-redux にある connect 関数を使うと state と Text の this.props をひも付けできる
// 前述したとおり、 store.subscribe() を呼ばなくても良くなる
// export default connect(mapStateToProps)(Text)

