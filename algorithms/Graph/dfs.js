let adjacencyList = {
    1: [2, 6],
    2: [1, 3, 4],
    3: [2],
    4: [2, 5],
    5: [4, 7],
    6: [1, 7, 8],
    7: [6, 5],
    8: [6]
}

/* where v is the no of nodes */
function dfs(node, adjacencyList, vis, out) {
    vis[node] = 1;
    out.push(node);
    let adjEl = adjacencyList[node];
    for (let i = 0; i < adjEl.length; i++) {
        if (vis[adjEl[i]] !== 1) {
            dfs(adjEl[i], adjacencyList, vis, out);
        }
    }
}
debugger;
let n = Object.keys(adjacencyList).length;
let vis = new Array(n).fill(0);
let out = [];
dfs(1, adjacencyList, vis, out);
console.log(out);
/* Output ) [1, 2, 6, 3, 4, 7, 8, 5] */
