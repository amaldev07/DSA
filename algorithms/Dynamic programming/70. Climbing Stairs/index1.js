/* function climbStairs(n) {
    return rec(0, n);
}
function rec(i, n) {
    if (i == n) return 1;
    let l = rec(i + 1, n);
    let r = 0;
    if (i + 2 <= n) {
        r = rec(i + 2, n);
    }
    return l + r;
}
 */
function climbStairs(n) {
    let dp = new Array(n + 1).fill(-1);
    return rec(n, n, dp);
}
function rec(i, n, dp) {
    if (i == 0) return 1;
    if (dp[n] != -1) return dp[n];
    let l = rec(i - 1, n, dp);
    let r = 0;
    if (i - 2 >= 0) {
        r = rec(i - 2, n, dp);
    }
    dp[n] = l + r;
    return l + r;
}
