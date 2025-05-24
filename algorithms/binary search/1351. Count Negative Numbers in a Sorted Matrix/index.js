/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    let arr = grid[i];
    let negIndex = getFirstNegIndex(arr);
    count = count + (arr.length - negIndex);
  }
  return count;
};
function getFirstNegIndex(arr) {
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    let m = Math.floor((s + e) / 2);
    if (arr[m] < 0 && m == 0) {
      return m;
    } else if (arr[m] < 0 && arr[m - 1] >= 0) {
      return m;
    } else if (arr[m] < 0 && arr[m - 1] < 0) {
      e = m - 1;
    } else {
      s = m + 1;
    }
  }
  return arr.length;
}

getFirstNegIndex([4, 3, 2, -1]);