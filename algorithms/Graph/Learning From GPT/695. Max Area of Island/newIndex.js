var maxAreaOfIsland = function (grid) {

    const rows = grid.length;
    const cols = grid[0].length;

    const visited = Array.from(
        { length: rows },
        () => Array(cols).fill(0)
    );

    let maxArea = 0;

    function dfs(r, c) {

        if (
            r < 0 ||
            c < 0 ||
            r >= rows ||
            c >= cols ||
            visited[r][c] === 1 ||
            grid[r][c] === 0
        ) {
            return 0;
        }

        visited[r][c] = 1;

        let area = 1;

        area += dfs(r - 1, c); // up
        area += dfs(r + 1, c); // down
        area += dfs(r, c - 1); // left
        area += dfs(r, c + 1); // right

        return area;
    }

    for (let r = 0; r < rows; r++) {

        for (let c = 0; c < cols; c++) {

            if (
                grid[r][c] === 1 &&
                visited[r][c] === 0
            ) {

                const area = dfs(r, c);

                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
};