/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let graph = Array.from({ length: numCourses }, () => []);
    for (let [course, destination] of prerequisites) {
        graph[destination].push(course);
    }

    let visited = new Set();
    let pathVisited = new Set();
    function hasCycleDfs(node) {
        if (pathVisited.has(node)) return true;
        if (visited.has(node)) return false;

        pathVisited.add(node);
        visited.add(node);

        for (let neighbour of graph[node]) {
            if (hasCycleDfs(neighbour)) {
                return true;
            }
        }
        pathVisited.delete(node);
        return false;
    }

    for (let coure = 0; coure < graph.length; coure++) {
        if (hasCycleDfs(coure)) {
            return false;
        }
    }

    return true;


};