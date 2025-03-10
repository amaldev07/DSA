/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let vis = Array.from({ length: rows }, () => Array(cols).fill(0));
    let maxArea = [0];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (vis[i][j] == 0 && grid[i][j] == 1) {
                vis[i][j] = 1;
                dfs(i, j, vis, grid, maxArea, [1]);
            }
        }
    }
    return maxArea[0];
};

function dfs(r, c, vis, grid, maxArea, count) {
    maxArea[0] = maxArea[0] > count[0] ? maxArea[0] : count[0];
    let totalRows = grid.length;
    let totalCols = grid[0].length;
    let delr = [-1, 0, 1, 0];
    let delc = [0, 1, 0, -1];

    for (let i = 0; i < 4; i++) {
        let nr = r + delr[i];
        let nc = c + delc[i];
        if (nr >= 0 && nr < totalRows && nc >= 0 && nc < totalCols &&
            grid[nr][nc] == 1 && vis[nr][nc] == 0) {
            vis[nr][nc] = 1;
            count[0] = count[0] + 1;
            dfs(nr, nc, vis, grid, maxArea, count);
        }
    }
}
/* let grid = [[1, 1, 1], [1, 0, 0]];
maxAreaOfIsland(grid); */