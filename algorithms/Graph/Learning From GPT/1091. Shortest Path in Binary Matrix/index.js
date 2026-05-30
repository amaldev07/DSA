/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    let lastRow = grid.length - 1;
    let lastColumn = grid[0].length - 1;
    if (grid[0][0] == 1 || grid[grid.length - 1][grid[0].length - 1] == 1) {
        return -1
    }

    let visited = new Set();
    let queue = [];

    queue.push([0, 0, 1]);
    visited.add('0,0');

    let dimentions = [
        [0, -1],
        [0, +1],
        [-1, 0],
        [+1, 0],
        [-1, -1],
        [-1, +1],
        [+1, -1],
        [+1, +1],
    ]

    while (queue.length > 0) {
        let [r, c, distance] = queue.shift();
        if (r == lastRow && c == lastColumn) {
            return distance;
        }
        for (let [dr, dc] of dimentions) {
            let nr = r + dr;
            let nc = c + dc;
            const key = `${nr},${nc}`;
            if (nr >= 0 && nc >= 0 && nr <= lastRow && nc <= lastColumn && grid[nr][nc] == 0 && !visited.has(key)) {
                queue.push([nr, nc, distance + 1]);
                visited.add(key);
            }
        }

    }

    return -1;

};