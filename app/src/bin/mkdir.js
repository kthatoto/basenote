
export default function mkdir(command, state, dispatch) {

  const validDirectories = ['Projects'];
  if (validDirectories.indexOf(state.Terminal.currentDirectory.split('/')[1]) >= 0) {
    dispatch({
      type: 'OUTPUT_MESSAGE',
      message: 'ok',
    });
  }
  return;
}
