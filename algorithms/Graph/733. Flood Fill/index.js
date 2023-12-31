function floodFill(image, sr, sc, color) {
    let vis = getVisitedArray(image.length, image[0].length);
};

function dfs() {

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