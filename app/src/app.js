import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from './menu';
import { Tasks } from './tasks';
import { Projects } from './projects';
import './styles/main.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'tasks',
    }
  }
  handleClick(i) {
    let content;
    if (i == 0) {
      content = 'tasks';
    } else {
      content = 'projects';
    }
    this.setState({
      content: content,
    });
  }
  render() {
    const content = this.state.content;
    let contentComponent;
    if (content === 'tasks') {
      contentComponent = <Tasks/>;
    } else {
      contentComponent = <Projects/>;
    }
    return (
      <div>
        <Menu
          onClick={(i) => this.handleClick(i)}
        />
        <div id="content">
          { contentComponent }
        </div>
      </div>
    );
  }
}
// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
