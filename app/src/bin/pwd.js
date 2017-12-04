
export default function pwd(command, state, dispatch) {
  dispatch({
    type: 'OUTPUT_MESSAGE',
    message: state.Terminal.currentDirectory,
  });
  return;
}
