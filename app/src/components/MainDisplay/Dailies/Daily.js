import React, { Component } from 'react';
import { connect } from 'react-redux';

class Daily extends Component {
  componentDidMount() {
    this.addTabInvalidation();
    document.activeElement.blur();
  }
  componentWillUnmount() {
    this.removeTabInvalidation();
  }
  addTabInvalidation() {
    document.onkeydown = e => {
      if (e.keyCode == 9) { return false; }
    };
  }
  removeTabInvalidation() {
    document.onkeydown = null;
  }
  render() {
    return (
      <div className="daily">
        <div className="daily__dateLabel"></div>
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
