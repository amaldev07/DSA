/* Adjacency Matrix to Adjacency list  Conversion*/
function matrixToAdjacencyList(matrix) {
    const adjacencyList = {};
    for (let i = 0; i < matrix.length; i++) {
        adjacencyList[i] = [];
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                adjacencyList[i].push(j);
            }
        }
    }
    return adjacencyList;
}
/* Input [[0, 1, 1], [1, 0, 1], [1, 1, 0]]; */
matrixToAdjacencyList([[1, 1, 0], [1, 1, 0], [0, 0, 1]]);
/* ------------------------------------------------------------------------------------------------- */

/* For the Leetcode question 
you may use the below one with some minimul changes to the above one */
/* Adjacency Matrix to Adjacency list  Conversion*/
function matrixToAdjacencyList(matrix) {
    const adjacencyList = {};
    for (let i = 0; i < matrix.length; i++) {
        adjacencyList[i + 1] = [];
        for (let j = 0; j < matrix[i].length; j++) {
            if (i != j && matrix[i][j] == 1) {
                adjacencyList[i + 1].push(j + 1);
            }
        }
    }
    return adjacencyList;
}
/* Input [[0, 1, 1], [1, 0, 1], [1, 1, 0]]; */
matrixToAdjacencyList([[1, 1, 0], [1, 1, 0], [0, 0, 1]]);