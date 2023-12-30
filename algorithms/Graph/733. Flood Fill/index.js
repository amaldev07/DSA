function floodFill(image, sr, sc, color) {
    bfs(image, sr, sc, color);
    return image;
};

// function bfs(v, adjacencyList) {
function bfs(image, sr, sc, color) {
    let n = image.length;
    let m = image[0].length;
    let vis = getVisitedArray(image.length, image[0].length);
    let q = [];
    q.push([sr, sc]);
    vis[sr][sc] = 1;
    image[sr][sc] = color;
    while (q.length > 0) {
        let el = q.pop();
        image[el[0]][el[1]] = 1;
        let items = [[0, -1], [0, 1], [-1, 0], [1, 0]]
        for (let i = 0; i < items.length; i++) {
            let nr = sr + items[i][0];
            let nc = sc + items[i][1];
            if (vis[nr][nc] == 0 &&
                nr >= 0 && nr < n &&
                nc >= 0 && nc < m) {
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