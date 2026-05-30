/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let rows = grid.length;
    let columns = grid[0].length;

    let queue = [];
    let freshCount = 0;
    let minutes = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] == 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                freshCount++;
            }
        }
    }
    let dimentions = [
        [0, -1],
        [0, +1],
        [-1, 0],
        [+1, 0]
    ]
    while (queue.length > 0 && freshCount > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let [r, c] = queue.shift();
            for (let [dr, dc] of dimentions) {
                let nr = r + dr;
                let nc = c + dc;
                if (nr >= 0 && nc >= 0 && nr < rows && nc < columns && grid[nr][nc] == 1) {
                    queue.push([nr, nc]);
                    grid[nr][nc] = 2;
                    freshCount--;
                }
            }
        }
        minutes++;
    }

    return freshCount == 0 ? minutes : -1;
};