
const initialState = {
  output: '',
  prime: 101,
  currentDirectory: '/',
  resources: [
    { name: "Dailies", type: "directory", resources: [], },
    { name: "Projects", type: "directory", resources: [], },
    { name: "Tasks", type: "directory", resources: [], },
    { name: "Books", type: "directory", resources: [], },
    { name: "Pictures", type: "directory", resources: [], },
    { name: "Notes", type: "directory", resources: [], },
    { name: "Ideas", type: "directory", resources: [], },
    { name: "Pages", type: "directory", resources: [], },
    { name: "Scraps", type: "directory", resources: [], },
    { name: "Snippets", type: "directory", resources: [], },
  ],
  calendar: {
    year: 2017,
    month: 12,
  },
  today: {
    year: 2017,
    month: 12,
    date: 6,
  }
};
export default function terminal(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_CALENDAR':
      return Object.assign({}, state, {
        calendar: {
          year: action.year,
          month: action.month
        },
      });
    case 'RANDOM_PRIME':
      const primes = [101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
      return Object.assign({}, state, {
        prime: primes[Math.floor(Math.random() * primes.length)],
      });
    case 'SAVE_DIRECTORY':
      return Object.assign({}, state, {
        currentDirectory: action.directory,
      });
    case 'OUTPUT_MESSAGE':
      return Object.assign({}, state, {
        output: action.message,
      });
    case 'CHANGE_DIRECTORY':
      let currentDirectory = '';
      if (state.currentDirectory.length > 1) {
        currentDirectory = state.currentDirectory;
      }
      return Object.assign({}, state, {
        currentDirectory: currentDirectory + '/' + action.directory,
        output: '',
      });
    case 'BACK_ROOT_DIRECTORY':
      return Object.assign({}, state, {
        currentDirectory: '/',
      });
    case 'BACK_DIRECTORY':
      if (state.currentDirectory === '/') {
        return Object.assign({}, state, {
          output: '',
        });
      }
      let backDirectory =
        state.currentDirectory.slice(0, state.currentDirectory.lastIndexOf('/'));
      backDirectory = backDirectory.length == 0 ? '/' : backDirectory;
      return Object.assign({}, state, {
        currentDirectory: backDirectory,
        output: '',
      });
    default:
      return state;
  }
}
