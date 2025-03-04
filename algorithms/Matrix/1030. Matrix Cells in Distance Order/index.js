/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
    let out = [[rCenter, cCenter]];
    let vis = Array.from({ length: rows }, () => Array(cols).fill(0));
    let q = [[rCenter, cCenter]];
    vis[rCenter][cCenter] = 1;
    while (q.length > 0) {
        let el = q.shift();
        let delr = [-1, 0, 1, 0];
        let delc = [0, 1, 0, -1];

        for (let i = 0; i < 4; i++) {
            let nr = el[0] + delr[i];
            let nc = el[1] + delc[i]
            if (nr >= 0 && nr < rows &&
                nc >= 0 && nc < cols &&
                vis[nr][nc] != 1
            ) {
                vis[nr][nc] = 1;
                q.push([nr, nc]);
                out.push([nr, nc]);
            }
        }
    }
    return out;
};