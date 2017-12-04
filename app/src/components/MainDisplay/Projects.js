import React, { Component } from 'react';
import { connect } from 'react-redux';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Projects);
