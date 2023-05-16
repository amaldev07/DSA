function main() {
    let n = 5;
    let dp = new Array(n + 1).fill(-1);
    return fibonacci(n, dp);
}
function fibonacci(n, dp) {
    if (n <= 1) return 1;
    if (dp[n] != -1) return dp[n];
    let fSum = fibonacci(n - 1, dp) + fibonacci(n - 2, dp);
    dp[n] = fSum;
    return fSum;
}