/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function (matrix) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let degrees = Array(rows).fill(0);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (matrix[i][j] === 1) {
                degrees[i]++;
            }
        }
    }

    return degrees;
};