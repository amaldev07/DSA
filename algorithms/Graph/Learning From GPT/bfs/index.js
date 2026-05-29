function bfs(graph) {
    let visisted = new Set();
    let q = [0];
    visisted.add(0);
    while (q.length > 0) {
        let node = q.shift();
        console.log(node);
        for (let neighbour of graph[node]) {
            if (!visisted.has(node)) {
                visisted.add(neighbour)
                q.push(neighbour);
            }
        }
    }
}