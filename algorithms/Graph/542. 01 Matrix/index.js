// function updateMatrix(mat: number[][]): number[][] {
//     let m = mat.length;
//     let n = mat[0].length;
//     let vis = Array.from({ length: m }, () => Array(n).fill(0));
//     let out = Array.from({ length: m }, () => Array(n).fill(0));
//     let q: any = [];
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             out[i][j] = mat[i][j];
//             if (mat[i][j] == 0) {
//                 q.push([[i, j], 0]);
//                 vis[i][j] = 1;
//             }
//         }
//     }
//     while (q.length > 0) {
//         let el = q.shift();
//         let i = el[0][0];
//         let j = el[0][1];
//         let val = el[1];
//         out[i][j] = val;
//         let newEls = [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]];
//         for (let x = 0; x < newEls.length; x++) {
//             let xi = newEls[x][0];
//             let xj = newEls[x][1];
//             if (xi >= 0 && xi < m &&
//                 xj >= 0 && xj < n &&
//                 vis[xi][xj] == 0
//             ) {
//                 vis[xi][xj] = 1;
//                 q.push([[xi, xj], (val + 1)]);
//             }
//         }
//     }
//     return out;
// };

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
                dis[i][j] = 0;
                q.push([[i, j], 0]);
            }
        }
    }

    while (q.length > 0) {
        let el = q.shift();
        let dis = el[i];
        let elr = el[0][0];
        let elc = el[0][1];
    }
};