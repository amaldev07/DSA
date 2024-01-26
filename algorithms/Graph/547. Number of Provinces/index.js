function findCircleNum(isConnected) {
    let adjList = convertMatrixToAdjList(isConnected);
    let n = isConnected.length;
    let vis = new Array(n + 1).fill(0);
    let count = 0;
    for (let i = 1; i < n + 1; i++) {
        if (vis[i] !== 1) {
            count = count + 1;
            dfs(i, adjList, vis);
        }
    }
    return count;
};
function dfs(node, adjacencyList, vis) {
    vis[node] = 1;
    let adjEl = adjacencyList[node];
    for (let i = 0; i < adjEl.length; i++) {
        if (vis[adjEl[i]] !== 1) {
            dfs(adjEl[i], adjacencyList, vis);
        }
    }
}
function convertMatrixToAdjList(matrix) {
    const adjList = {};
    // Iterate through the matrix
    for (let i = 0; i < matrix.length; i++) {
        adjList[i + 1] = []; // Initialize the adjacency list for node (i+1)
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                adjList[i + 1].push(j + 1); // Add node (j+1) to the adjacency list of node (i+1)
            }
        }
    }

    return adjList;
}