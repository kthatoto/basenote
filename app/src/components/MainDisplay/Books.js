import React, { Component } from 'react';
import { connect } from 'react-redux';

class Books extends Component {
  render() {
    return (
      <div className="books">
        <img src="../../images/book1.jpg" />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Books);
