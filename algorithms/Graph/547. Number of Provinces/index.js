function findCircleNum(isConnected) {
    let n = isConnected.length;
    let adjList = matrixToAdjacencyList(isConnected, n);
    let vis = new Array(n).fill(0);
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (vis[i] !== 1) {
            count = count + 1;
            dfs(1, adjList, vis);
        }
    }
    return count;
};
function dfs(node, adjacencyList, vis, out) {
    debugger;
    vis[node] = 1;
    out.push(node);
    let adjEl = adjacencyList[node];
    for (let i = 0; i < adjEl.length; i++) {
        if (vis[adjEl[i]] !== 1) {
            dfs(adjEl[i], adjacencyList, vis, out);
        }
    }
}
function matrixToAdjacencyList(matrix, n) {
    const adjacencyList = []
    for (let i = 0; i < n; i++) {
        adjacencyList[i] = [];
        for (let j = 0; j < n; j++) {
            if ((i != j) && (matrix[i][j] == 1)) {
                adjacencyList[i].push(j);
            }
        }
    }
    return adjacencyList;
}