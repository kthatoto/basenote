import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tasks extends Component {
  render() {
    return (
      <div className="taskItem">
        {this.props.Tasks.projects.map(project => {
          return <div className="taskItem__project" key={project.name}>
            <p className="taskItem__projectName">{project.name}</p>
            {project.tasks.map(task => {
              const className = "taskItem__check" + (task.completed ? ' -completed' : '');
              return <div className="taskItem__task" key={task.name}>
                <span className={className}></span>
                {task.name}
              </div>;
            })}
          </div>;
        })}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Tasks);
