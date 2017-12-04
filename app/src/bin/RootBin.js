
import echo from './echo';
import cd from './cd';
import pwd from './pwd';
import mkdir from './mkdir';

export default class RootBin {
  static processCommand(rawCommand, state, dispatch) {
    const command = rawCommand.split(" ").filter(value => value);

    switch(command[0]) {
      case 'echo':
        echo(command, dispatch);
        return;
      case 'cd':
        cd(command, state, dispatch);
        return;
      case 'pwd':
        pwd(command, state, dispatch);
        return;
      case 'mkdir':
        mkdir(command, state, dispatch);
        return;
      default:
        dispatch({
          type: 'OUTPUT_MESSAGE',
          message: command[0] + ': command not found',
        });
        return;
    }
  }
}
