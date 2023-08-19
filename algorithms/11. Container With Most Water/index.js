/* use 2 PointerEventstart i from 0 and j from len-1
start moving i  and j in such a way that we wnat oto keep the most height
if the ext one in left is small then  move right to one before */
function maxArea(height) {
    debugger;
    let maxArea = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        maxArea = Math.max(maxArea, getArea(height[i], height[j], (j - i)));
        if (height[i] > height[j]) {
            j = j- 1;
        } else {
            i=i+ 1;
        }
    }
    return maxArea;
};
function getArea(x, y, w) {
    let min = Math.min(x, y);
    return min * w;
}
maxArea([1, 2, 4, 3])