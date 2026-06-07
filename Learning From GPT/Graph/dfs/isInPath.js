/* 
0-1-2
3-4

we have to check if 012 is a path
*/
const n = 5;

const edges = [
    [0, 1],
    [1, 2],
    [3, 4]
];
var validPath = function (n, edges, source, destination) {
    // convert edges to graph
    const graph = Array.from(
        { length: n },
        (_, i) => {
            return [];
        });
        
    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let visited = new Set();

    function dfs(node) {
        if (visited.has(node)) return false;
        if (node == destination) return true;
        visited.add(node);
        for (let neighbour of graph[node]) {
            if (dfs(neighbour)) {
                return true;
            }
        }
        return false;
    }
    return dfs(source);
};