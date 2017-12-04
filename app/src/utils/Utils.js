
export default class Utils {
  static currentResources(resources, currentDirectory) {
    let tmpResources = resources;
    currentDirectory.split("/").slice(1).forEach(path => {
      tmpResources.some(resource => {
        if (path == resource.name) {
          tmpResources = resource.resources;
          return true;
        }
      });
    });
    return tmpResources;
  }
}
