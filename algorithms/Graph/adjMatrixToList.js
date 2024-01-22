
function matrixToAdjacencyList(matrix) {
    debugger;
    let n = matrix.length;
    let adjacencyList = {};
    for (let i = 0; i < n; i++) {
        adjacencyList[i + 1] = [];
        for (let j = 0; j < n; j++) {
            if ((i != j) && matrix[i][j] == 1) {
                adjacencyList[i + 1].push(j + 1);
            }
        }
    }
    return adjacencyList;
}
matrixToAdjacencyList([[0, 1, 1], [1, 0, 1], [1, 1, 0]]);
matrixToAdjacencyList([[1, 1, 0], [1, 1, 0], [0, 0, 1]]);