
export function changeDirectory(directoryName) {
  return {
    type: "CHANGE_DIRECTORY",
    directoryName,
  };
}
