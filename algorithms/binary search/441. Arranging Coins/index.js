/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let c = 0;
    while (n > 0) {
        c = c + 1;
        n = n - c;
        if (n < 0) c = c - 1;
    }
    return c;
};