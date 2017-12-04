import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dailies from './MainDisplay/Dailies';
import Projects from './MainDisplay/Projects';
import Tasks from './MainDisplay/Tasks';

class MainDisplay extends Component {
  render() {
    const components = [
      'Dailies',
      'Projects',
      'Tasks',
    ];
    const currentComponent = this.props.Terminal.currentDirectory.split('/')[1];
    const isShows = components.map(component => component == currentComponent );
    return (
      <div className="mainDisplay">
        {isShows[0] && <Dailies />}
        {isShows[1] && <Projects />}
        {isShows[2] && <Tasks />}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(MainDisplay);
