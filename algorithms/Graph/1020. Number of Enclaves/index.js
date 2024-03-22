/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let vis = Array.from({ length: rows }, () => Array(cols).fill(0));
    let q = [];
    for (let i = 0; i < cols; i++) {
        if (grid[0][i] == 1 && vis[0][i] != 1) {
            vis[0][i] = 1;
            q.push([0, i]);
        }

        if (grid[rows - 1][i] == 1 && vis[rows - 1][i] != 1) {
            vis[rows - 1][i] = 1;
            q.push([rows - 1, i]);
        }
    }

    for (let i = 0; i < rows; i++) {
        if (grid[i][0] == 1 && vis[i][0] != 1) {
            vis[i][0] = 1;
            q.push([i, 0]);
        }

        if (grid[i][cols - 1] == 1 && vis[i][cols - 1] != 1) {
            vis[i][cols - 1] = 1;
            q.push([i, cols - 1]);
        }
    }
    while (q.length > 0) {
        let el = q.shift();
        let delr = [-1, 0, 1, 0];
        let delc = [0, 1, 0, -1];

        for (let i = 0; i < 4; i++) {
            let nr = el[0] + delr[i];
            let nc = el[1] + delc[i]
            if (nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols &&
                grid[nr][nc] == 1 &&
                vis[nr][nc] != 1
            ) {
                vis[nr][nc] = 1;
                q.push([nr, nc]);
            }
        }
    }
    let count = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (grid[i][j] == 1 && vis[i][j] != 1) {
                count = count + 1;
            }
        }
    }
    return count;
};

let input = [[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]];
numEnclaves(input);