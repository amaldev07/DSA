/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let rows = board.length;
    let cols = board[0].length;
    let vis = Array.from({ length: rows }, () => Array(cols).fill(0));
    for (let i = 0; i < cols; i++) {
        if (board[0][i] == 'O' && vis[0][i] != 1) {
            vis[0][i] = 1;
            dfs(0, i, vis, board);
        }
        if (board[rows - 1][i] == 'O' && vis[rows - 1][i] != 1) {
            vis[rows - 1][i] = 1;
            dfs((rows - 1), i, vis, board);
        }
    }

    for (let i = 0; i < rows; i++) {
        if (board[i][0] == 'O' && vis[i][0] != 1) {
            vis[i][0] = 1;
            dfs(i, 0, vis, board);
        }
        if (board[i][cols - 1] == 'O' && vis[i][cols - 1] != 1) {
            vis[i][cols - 1] = 1;
            dfs(i, (cols - 1), vis, board);
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] == 'O' && vis[i][j] != 1) {
                board[i][j] = 'X';
            }
        }
    }
    return board;
    function dfs(r, c, vis, board) {
        let totalRows = board.length;
        let totalCols = board[0].length;
        let delr = [-1, 0, 1, 0];
        let delc = [0, 1, 0, -1];
        for (let i = 0; i < 4; i++) {
            let nr = r + delr[i];
            let nc = c + delc[i];
            if (nr >= 0 && nr < totalRows && nc >= 0 && nc < totalCols && board[nr][nc] == 'O' && vis[nr][nc] != 1) {
                vis[nr][nc] = 1;
                dfs(nr, nc, vis, board);
            }
        }
    }
};
let input = [["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]];
solve(input);