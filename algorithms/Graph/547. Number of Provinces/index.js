function findCircleNum(isConnected) {
    let n = isConnected.length;
    let adjList = matrixToAdjacencyList(isConnected, n);
    let vis = new Array(n).fill(0);
};
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