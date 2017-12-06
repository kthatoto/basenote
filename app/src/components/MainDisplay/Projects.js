import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectItem from './Projects/ProjectItem';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        {this.props.Projects.projects.map(project => {
          return <ProjectItem project={project} key={project.title} />;
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Projects);
