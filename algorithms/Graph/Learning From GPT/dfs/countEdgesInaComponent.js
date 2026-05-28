let visited = new Set();
function dfs(node) {
    if (visited.has(node)) return 0;
    visited.add(node);
    let degreeSum = graph[node].length;
    for (let neighbour of graph[node]) {
        degreeSum = degreeSum + dfs(neighbour);
    }
    return degreeSum;
}

const edges = dfs(0) / 2;

console.log(edges);