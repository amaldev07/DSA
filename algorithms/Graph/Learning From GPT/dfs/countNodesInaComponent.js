let visited = new Set();
function dfs(node) {
    if (visited.has(node)) return 0;
    visited.add(node);
    let count = 1;
    for (let neighbour of graph[node]) {
        count = count + dfs(neighbour);
    }
    return count;
}