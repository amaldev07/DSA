function main(n) {
    let dp = new Array(n + 1).fill(-1);
    return fibonacci(n, dp);
    /*  let fib = fibonacci(n, dp);
     console.log(dp);
     return fib */
}
function fibonacci(n, dp) {
    if (n <= 1) return n;
    if (dp[n] != -1) return dp[n];
    let fSum = fibonacci(n - 1, dp) + fibonacci(n - 2, dp);
    dp[n] = fSum;
    return fSum;
}
// main(5);
// fibonacciRecursionMemoization