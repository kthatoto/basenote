
export default function cal(command, state, dispatch) {
  if (command[1] > 1990 &&  1 <= command[2] && command[2] <= 12)
  dispatch({
    type: 'CHANGE_CALENDAR',
    year: command[1],
    month: command[2],
  });
  return;
}
