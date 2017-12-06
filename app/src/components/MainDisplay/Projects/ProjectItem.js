import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectItem extends Component {
  render() {
    return (
      <div className="projectItem">
        <p className="projectItem__title">{this.props.project.title}</p>
        <p className="projectItem__task">Tasks: {this.props.project.taskCount}</p>
        <p className="projectItem__task -urgent">Urgent Tasks: {this.props.project.urgentTaskCount}</p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ProjectItem);
