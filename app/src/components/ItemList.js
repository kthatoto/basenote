import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteItem } from '../actions/itemActionCreator';

class ItemList extends Component {
  renderItem(name, i) {
    return (
      <li key={"item" + i}>
        <div className="items__item">
          {name}
          <span className="items__delete" onClick={() => this.deleteItem(i)}></span>
        </div>
      </li>
    );
  }
  deleteItem(i) {
    this.props.deleteItem(i);
  }
  render() {
    return (
      <ul>
        {this.props.ItemReducer.items.map((item, index) => {
          return this.renderItem(item.name, index);
        })}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    deleteItem: index => {
      dispatch(deleteItem(index))
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
