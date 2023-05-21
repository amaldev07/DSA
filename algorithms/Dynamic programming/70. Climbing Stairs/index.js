function climbStairs(n) {
    let s = n;
    let cAry = [];
    rec('', cAry, s);
    return cAry;
}
function rec(p, cAry, s) {
    debugger;
    let sum = getSum(p);
    if (sum == s) {
        cAry.push(p);
        return;
    }
    if (sum + 1 <= s) {
        rec(p + '1', cAry, s)
    }
    if (sum + 2 <= s) {
        rec(p + '2', cAry, s)
    }
    return;
}
function getSum(n) {
    return n.length > 0 ? n.split('').reduce(((acc, cur) => acc + (+cur)), 0) : 0;
}