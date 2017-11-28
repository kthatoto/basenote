import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemList extends Component {
  render() {
    return (
      <div>
        {this.props.ItemReducer.items.map(item => {
          return <p>{item.name}</p>;
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
