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
    }
};