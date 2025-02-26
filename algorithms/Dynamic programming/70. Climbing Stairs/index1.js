/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let no = 0;
    return recursion(no, n);
};

function recursion(x, n) {
    debugger;
    console.log(x, n)
    if (x == n) {
        return 1;
    } else if (x > n) {
        return 0;
    }
    let l = recursion(x + 1, n);
    let r = recursion(x + 2, n);
    return l + r;
}

climbStairs(2);