/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
    let graph = Array.from({ length: n }, () => {
        return [];
    });
    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    let visited = new Set();

    function dfs(node) {
        if (visited.has(node)) return { nodes: 0, degreeSum: 0 };
        visited.add(node);
        let nodes = 1;
        let degreeSum = graph[node].length;
        for (let neighbour of graph[node]) {
            let result = dfs(neighbour);
            nodes = nodes + result.nodes;
            degreeSum = degreeSum + result.degreeSum;
        }
        return { nodes, degreeSum };

    }

    let completedComponents = 0;
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            let result = dfs(i);
            let nodes = result.nodes;
            let edges = result.degreeSum / 2;
            let expectedEdges = (nodes) * (nodes - 1) / 2;
            if (expectedEdges == edges) {
                completedComponents = completedComponents + 1;
            }
        }
    }
    return completedComponents;
};