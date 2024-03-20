/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let vis = Array.from({ length: rows }, () => { Array(cols).fill(0) });
    let q = [];
    for (let i = 0; i < cols; i++) {
        if (grid[0][i] == 0 && vis[0][i] != 1) {
            q.push(grid[0][i]);
        }

        if (grid[rows - 1][i] == 0 && vis[0][i] != 1) {
            q.push(grid[0][i]);
        }
    }

    for (let i = 0; i < rows; i++) {
        if (grid[i][0] == 0 && vis[i][0] != 1) {
            q.push(grid[i][0]);
        }

        if (grid[i][cols - 1] == 0 && vis[i][cols - 1] != 1) {
            q.push(grid[i][cols - 1]);
        }
    }
    // while(q.)
};