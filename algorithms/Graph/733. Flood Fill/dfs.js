/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    debugger;
    if (image[sr][sc] == color) return image;
    let initalColor = image[sr][sc];
    let vis = Array.from({ length: image.length }, () => Array(image[0].length).fill(0));
    dfs(image, sr, sc, color, initalColor, vis);
    return image;
};
function dfs(image, r, c, color, initialColor, vis) {
    vis[r][c] = 1;
    image[r][c] = color;
    let sides = [
        [c - 1, r],
        [c + 1, r],
        [c, r - 1],
        [c, r + 1],
    ]
    for (let i = 0; i < sides.length; i++) {
        let x = sides[i][0];
        let y = sides[i][1];
        if (x >= 0 && x < image.length &&
            y >= 0 && y < image[0].length &&
            vis[x][y] == 0 &&
            image[x][y] == initialColor
        ) {
            dfs(image, x, y, color, initialColor, vis)
        }
    }
}
let arr = [[2,2,2],[2,1,0]];
floodFill(arr);