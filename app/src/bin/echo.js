
export default function echo(command, dispatch) {
  dispatch({
    type: 'OUTPUT_MESSAGE',
    message: command.slice(1).join(" "),
  });
  return;
}
