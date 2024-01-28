/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function (grid) {
    debugger;
    let count = 0;
    let vis = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0));
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1 && vis[i][j] == 0) {
                count++;
                dfs(i, j, vis, grid);
            }
        }
    }
    console.log(count);
    return count;
};
function dfs(i, j, vis, grid) { // can be done also using bfs using a queue
    if ((vis[i][j] == 0) && (grid[i][j] == 1)) {
        vis[i][j] = 1;
        let neighbours = [
            [i - 1, j],// above node
            // [i - 1, j + 1], not need to take teh corner nodes 
            // [i - 1, j - 1], not need to take teh corner nodes 
            [i, j - 1], // below node
            [i, j + 1], // right node
            // [i + 1, j - 1], not need to take teh corner nodes 
            // [i + 1, j + 1], not need to take teh corner nodes 
            [i + 1, j], // left node
        ];
        for (let k = 0; k < neighbours.length; k++) {
            let el = neighbours[k];
            let x = el[0];
            let y = el[1];
            if (x >= 0 && x < grid.length &&
                y >= 0 && y < grid[0].length &&
                vis[x][y] == 0 &&
                grid[x][y] == 1
            ) {
                dfs(x, y, vis, grid);
            }
        }
    }
};
/* let grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]
numIslands(grid); */