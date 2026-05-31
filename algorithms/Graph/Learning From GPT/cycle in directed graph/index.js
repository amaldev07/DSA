function hasCycle(graph) {
    const visited = new Set();
    const pathVisited = new Set();

    function dfs(node) {
        if (pathVisited.has(node)) {
            return true; // cycle found
        }

        if (visited.has(node)) {
            return false; // already checked before, no cycle from here
        }

        visited.add(node);
        pathVisited.add(node);

        for (const neighbour of graph[node]) {
            if (dfs(neighbour)) {
                return true;
            }
        }

        pathVisited.delete(node);

        return false;
    }

    for (let node = 0; node < graph.length; node++) {
        if (dfs(node)) {
            return true;
        }
    }

    return false;
}

console.log(hasCycle(graph)); // true