
import Utils from '../Utils/Utils';

export default function cd(command, state, dispatch) {
  const currentResources = Utils.currentResources(
    state.Terminal.resources,
    state.Terminal.currentDirectory
  ).map(resource => resource.name);
  if (currentResources.indexOf(command[1]) >= 0) {
    dispatch({
      type: 'CHANGE_DIRECTORY',
      directory: command[1],
    });
  } else if (command[1] == '..') {
    dispatch({
      type: 'BACK_DIRECTORY',
    });
  } else {
    dispatch({
      type: 'OUTPUT_MESSAGE',
      message: 'cd: ' + command[1] + ': No such file or directory',
    });
  }
  return;
}
