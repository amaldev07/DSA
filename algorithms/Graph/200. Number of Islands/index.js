function numIslands(grid) {
    let count = 0;
    let n = grid.length;
    let m = grid[0].length;
    let vis = new Array(n).fill(new Array(m).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; i < m; j++) {
            if (vis[i][j] == 0 && grid[i][j] == '1') {
                bfs(i, j, vis, grid);
                count++;
            }
        }
    }
    return count;
};
function bfs(i, j, vis, grid) {
    let n = grid.length;
    let m = grid[0].length;
    let q = [];
    q.push([i, j]);
    while (q.length > 0) {
        let el = q.pop();
        let r = el[0];
        let c = el[1];
        for (let i = -1; i <= 1; i++)
            for (let j = -1; j <= 1; j++) {
                let newr = r + j;
                let newc = c + j;
                if (newr >= 0 && newr < n &&
                    newc >= 0 && newc < m &&
                    vis[newr][newc] == 0 && grid[newr][newc] == '1') {
                    vis[newr][newc] = 1;
                    q.push([newr, newc]);
                }
            }
    }
}