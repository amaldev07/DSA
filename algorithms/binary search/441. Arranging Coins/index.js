/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let s = 0, e = n;
    while (s <= e) {
        let m = Math.floor((s + e) / 2);
        console.log(m)
        let sum = m * (m + 1) / 2;
        if (sum === n) {
            return m;
        } else if (sum < n) {
            s = m + 1;
        } else {
            e = m - 1;
        }
    }
    return e;
};