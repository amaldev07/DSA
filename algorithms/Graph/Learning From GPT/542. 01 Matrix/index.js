/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let rows = mat.length;
    let columns = mat[0].length;

    let queue = [];
    let visited = new Set();
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (mat[r][c] == 0) {
                queue.push([r, c]);
                visited.add(`${r},${c}`);
            }
        }

        let dimentions = [
            [-1, 0],
            [+1, 0],
            [0, -1],
            [0, +1]
        ];
        while (queue.length > 0) {
            let [r, c] = queue.shift();
            let value = mat[r][c];
            for (let [dr, dc] of dimentions) {
                let nr = dr + r;
                let nc = dc + c;
                let key = `${nr},${nc}`;
                if (nr >= 0 && nc >= 0 && nr < rows && nc < columns && !visited.has(key)) {
                    visited.add(key);
                    queue.push([nr, nc]);
                    mat[nr][nc] = value + 1;
                }
            }
        }
    }
    return mat;
};