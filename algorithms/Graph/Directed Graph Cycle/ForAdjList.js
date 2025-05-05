
function isCyclic(V, edges) {
    debugger;
    let vis = new Array(V).fill(0);
    let path = new Array(V).fill(0);
    for (let i = 0; i < V; i++) {
        if (vis[i] === 0) {
            vis[i] = 1;
            path[i] = 1;
            if (dfs(i, vis, path, edges)) {
                return true;
            }
        }
    }
    return false;
}
function dfs(node, vis, path, edges) {
    for (let i = 0; i < edges[node].length; i++) {
        let child = edges[node][i];
        if (vis[child] === 0) {
            vis[child] = 1;
            path[child] = 1;
            if (dfs(child, vis, path, edges)) {
                return true;
            }
        } else if (path[child] === 1) {
            return true;
        }
    }
    path[node] = 0;
    return false;
}


const V1 = 7;
const adjList6 = [
    [1],     // 0 → 1
    [2],     // 1 → 2
    [0, 3],  // 2 → 0, 2 → 3
    [4],     // 3 → 4
    [2, 5],  // 4 → 2, 4 → 5
    [6],     // 5 → 6
    []       // 6 → (no outgoing edges)
];
// Graph:
// 0 → 1 → 2 → 3
//  \→ 2
console.log(isCyclic(6, adjList6)); 
