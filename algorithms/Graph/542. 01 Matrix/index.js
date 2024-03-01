/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let r = mat.length;
    let c = mat[0].length;
    let vis = Array.from({ length: r }, () => Array(c).fill(0));
    let dis = Array.from({ length: r }, () => Array(c).fill(0));
    let q = [];
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (mat[i][j] == 0) {
                vis[i][j] = 1;
                q.push([[i, j], 0]);
            }
        }
    }

    while (q.length > 0) {
        let el = q.shift();
        let val = el[1];
        let [x, y] = el[0];
        dis[x][y] = val;
        let newXys = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]];
        for (let i = 0; i < newXys.length; i++) {
            let [xi, yi] = newXys[i];
            if (xi >= 0 && xi < r &&
                yi >= 0 && yi < c &&
                vis[xi][yi] == 0
            ) {
                vis[xi][yi] = 1;
                q.push([[xi, yi], (val + 1)]);
            }
        }
    }
    return dis;
};