function floodFill(image, sr, sc, color) {
    bfs(image, sr, sc, color);
    return image;
};

function bfs(image, sr, sc, color) {
    let existingColor = image[sr][sc];
    let n = image.length;
    let m = image[0].length;
    let vis = getVisitedArray(image.length, image[0].length);
    let q = [];
    q.push([sr, sc]);
    vis[sr][sc] = 1;
    while (q.length > 0) {
        let el = q.pop();
        let r = el[0];
        let c = el[1];
        image[r][c] = color;
        let items = [[0, -1], [0, 1], [-1, 0], [1, 0]]
        for (let i = 0; i < items.length; i++) {
            let nr = r + items[i][0];
            let nc = c + items[i][1];
            if (nr >= 0 && nr < n &&
                nc >= 0 && nc < m
                && vis[nr][nc] == 0 &&
                image[nr][nc] == existingColor) {
                vis[nr][nc] = 1;
                q.push([nr, nc]);
            }
        }
    }
}
function getVisitedArray(r, c) {
    let vis = [];
    for (let i = 0; i < r; i++) {
        let cVis = [];
        for (let j = 0; j < c; j++) {
            cVis.push(0);
        }
        vis.push(cVis);
    }
    return vis;
}