var numIslands = function(grid) {

    const rows = grid.length;
    const cols = grid[0].length;
    let visited = Array.from({ length: rows }, () => {
        return Array(cols).fill(0);
    })

    function dfs(r, c) {
        if (visited[r][c]=1 || r >= rows || c >= cols || r < 0 || c < 0 || grid[r][c] == '0') {
            return;
        }

        dfs(r, c - 1);
        dfs(r, c + 1);
        dfs(r - 1, c);
        dfs(r + 1, c);
    }

    let count = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; i < cols; j++) {
            if (visited[i][j] == 0) {
                count = count + 1;
                dfs(i, j);
            }
        }
    }
    return count;
};