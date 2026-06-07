/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    let rows = image.length;
    let columns = image[0].length;

    let oldColor = image[sr][sc];
    let visited = new Set();
    function dfs(r, c) {
        let key = `${r},${c}`;

        if (r < 0 || c < 0 || r >= rows || c >= columns || visited.has(key) || image[r][c] != oldColor) {
            return;
        }

        visited.add(key);
        image[r][c] = color;

        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }

    if (oldColor != color) {
        dfs(sr, sc);
    }

    return image;
};