var orangesRotting = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const queue = [];
    let fresh = 0;
    let minutes = 0;

    // Step 1: collect rotten oranges + count fresh oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                fresh++;
            }
        }
    }

    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];

    // Step 2: BFS level by level
    while (queue.length > 0 && fresh > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift();

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 &&
                    nr < rows &&
                    nc >= 0 &&
                    nc < cols &&
                    grid[nr][nc] === 1
                ) {
                    grid[nr][nc] = 2;
                    fresh--;
                    queue.push([nr, nc]);
                }
            }
        }

        minutes++;
    }

    return fresh === 0 ? minutes : -1;
};