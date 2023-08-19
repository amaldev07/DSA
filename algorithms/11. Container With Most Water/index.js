/* use 2 PointerEventstart i from 0 and j from len-1
start moving i  and j in such a way that we wnat oto keep the most height
if the ext one in left is small then  move right to one before */
function maxArea(height) {

};
function getArea(x, y, w) {
    let min = Math.min(x, y);
    return min * w;
}