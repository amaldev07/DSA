/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let vis = Array({ length: rows }, () => Array(cols).fill(0));
    let maxArea = [0];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            dfs(i, j, vis, grid, maxArea, 1);
            vis[i][j] = 1;
        }
    }
    return maxArea[0];
};

function dfs(r, c, vis, grid, maxArea, count) {
    maxArea[0] = maxArea[0] > count ? maxArea[0] : count;
    let totalRows = board.length;
    let totalCols = board[0].length;
    let delr = [-1, 0, 1, 0];
    let delc = [0, 1, 0, -1];
    for (let i = 0; i < 4; i++) {
        let nr = r + delr[i];
        let nc = c + delc[i];
        if (nr >= 0 && nr < totalRows && nc >= 0 && nc < totalCols &&
            grid[nr][nc] == 1 && vis[nr][nc] != 0) {
            vis[nr][nc] = 1;
            dfs(nr, nc, vis, grid, maxArea, count + 1);
        }
    }
}