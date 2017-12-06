
const initialState = {
  cursor: {
    line: 1,
    column: 1,
  },
  statusLine: '',
  mode: 'normal',
};
export default function vim(state = initialState, action) {
  let new_cursor;
  switch (action.type) {
    case 'INIT_CURSOR':
      return Object.assign({}, state, {
        cursor: {
          line: 1,
          column: 1,
        },
        statusLine: '',
        mode: 'normal',
      });
    case 'ADD_CHAR_TO_COMMAND_LINE':
      return Object.assign({}, state, {
        statusLine: state.statusLine + action.char,
      });
    case 'COMMAND_MODE':
      return Object.assign({}, state, {
        statusLine: ':',
        mode: 'command',
      });
    case 'INSERT_MODE':
      return Object.assign({}, state, {
        mode: 'insert',
      });
    case 'NORMAL_MODE':
      return Object.assign({}, state, {
        mode: 'normal',
      });
    case 'H_MOVE':
      new_cursor = {
        line: state.cursor.line,
        column: state.cursor.column - 1,
      };
      if (action.content[new_cursor.line - 1] &&
        action.content[new_cursor.line - 1].string[new_cursor.column - 1]) {
        return Object.assign({}, state, {
          cursor: new_cursor,
        });
      }
      return state;
    case 'J_MOVE':
      new_cursor = {
        line: state.cursor.line + 1,
        column: state.cursor.column,
      };
      if (action.content[new_cursor.line - 1] &&
        action.content[new_cursor.line - 1].string[new_cursor.column - 1]) {
        return Object.assign({}, state, {
          cursor: new_cursor,
        });
      }
      return state;
    case 'K_MOVE':
      new_cursor = {
        line: state.cursor.line - 1,
        column: state.cursor.column,
      };
      if (action.content[new_cursor.line - 1] &&
        action.content[new_cursor.line - 1].string[new_cursor.column - 1]) {
        return Object.assign({}, state, {
          cursor: new_cursor,
        });
      }
      return state;
    case 'L_MOVE':
      new_cursor = {
        line: state.cursor.line,
        column: state.cursor.column + 1,
      };
      if (action.content[new_cursor.line - 1] &&
        action.content[new_cursor.line - 1].string[new_cursor.column - 1]) {
        return Object.assign({}, state, {
          cursor: new_cursor,
        });
      }
      return state;
    default:
      return state;
  }
}
