
export default class RootBin {
  static processCommand(rawCommand, dispatch) {
    const command = rawCommand.split(" ").filter(value => value);

    switch(command[0]) {
      case 'echo':
        dispatch({
          type: 'OUTPUT_MESSAGE',
          message: command.slice(1, command.length).join(" "),
        });
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
