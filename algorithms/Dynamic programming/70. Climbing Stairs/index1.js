/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let no = 0;
    let map = new Map();
    return recursion(no, n, map);
};

function recursion(x, n, map) {
    if (map.has(x)) {
        return map.get(x);
    }
    if (x == n) {
        return 1;
    } else if (x > n) {
        return 0;
    }
    let l = recursion(x + 1, n, map);
    let r = recursion(x + 2, n, map);
    map.set(x, l + r);
    return l + r;
}

climbStairs(2);