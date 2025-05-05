
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
}
function dfs(node, vis, path, edges) {
    console.log(edges[node]);
    for (let i = 0; i < edges[node].length; i++) {
        // if (edges[node][0] === node) {
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
        // }
    }
    path[node] = 0;
    return false;
}


const V1 = 4;
const edges1 = [
    [1, 2],
    [2],
    [3],
    []
];
// Graph:
// 0 → 1 → 2 → 3
//  \→ 2
console.log(isCyclic(V1, edges1)); 
