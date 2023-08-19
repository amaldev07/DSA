function maxArea(height) {

};
function getArea(x, y, i, j) {
    let min = Math.min(x, y);
    return min * (j - i);
}