/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let q = [];
    let rottonCount = 0
    let count = 0
    let time = 0;
    let vis = Array.from({ length: m }, () => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2) {
                let orange = grid[i][j];
                q.push([orange, 0]);
                vis[i][j] = 2;

            } else if (grid[i][j]) {
                count = count + 1;
            }
        }
    }
    while (q.length > 0) {
        let ele = q.shift();
        let r = ele[0][0];
        let c = ele[0][1];
        let neighbours = [
            [r - 1, c]
            [r + 1, c]
            [r, c - 1]
            [r, c + 1]
        ]
        for (let i = 0; i < neighbours.length; i++) {
            let e = neighbours[i];
            let x = e[0];
            let y = e[y];
            if (x >= 0 && x < m &&
                y >= 0 && y < n &&
                vis[x][y] != 2 &&
                grid[x][y] == 1
            ) {
                q.push([neighbours[i], ele[1] + 1])
                rottonCount = rottonCount + 1;
                time = ele[1];
            }
        }
    }
    if (rottonCount != count) return false;
    return time;
};