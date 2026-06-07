/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var canFinish = function (numCourses, prerequisites) {
    let graph = Array.from({ length: numCourses }, () => []);
    let inDegree = Array(numCourses).fill(0);
    let queue = [];
    let courseOrder = [];

    for (let [u, v] of prerequisites) {
        graph[v].push(u);
        inDegree[u]++;
    }

    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length > 0) {
        let node = queue.shift();
        courseOrder.push(node);

        for (let neighbour of graph[node]) {
            inDegree[neighbour]--;
            if (inDegree[neighbour] === 0) {
                queue.push(neighbour);
            }
        }
    }

    return courseOrder.length === numCourses ? true:false;

};