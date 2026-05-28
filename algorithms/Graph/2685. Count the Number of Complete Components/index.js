var countCompleteComponents = function (n, edges) {
    let count = 0;
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u); // undirected graph
    }
    console.log(graph);

    const visited = new Set();
    function dfs(node, prev) {
        if (visited.has(node)) return;

        visited.add(node);
        for (let item of graph[node]) {
            if (visited.has(item) && item != prev) {
                count++;
                return;
            } else {
                dfs(item, node);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs(i, -1);
        }
    }
    return count;

};