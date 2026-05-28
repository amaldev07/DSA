function getMaxSize(graph) {
    let visited = new Set();
    function dfs(node) {
        if (visited.has(node)) return 0;
        visited.add(node);
        let count = 1;
        for (let neighbour of graph[node]) {
            let countTilleighbourNode = dfs(neighbour);
            count = count + countTilleighbourNode;
        }
        return count;
    }

    let maxLength = 0;
    for (let i = 0; i < graph.length; i++) {
        if (!visited.has(i)) {
            let size = dfs(i);
            maxLength = Math.max(size, maxLength);
        }
    }
    return maxLength;
}