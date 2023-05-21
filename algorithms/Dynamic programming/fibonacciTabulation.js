function fibonacciTabulation(n) {
    let dp = new Array(n + 1).fill(-1);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

/* Below is the same of above with a more optimized way */
function fibonacciTabulation(n) {
    let secondPrevious = 0;
    let previous = 1;
    let curr;
    for (let i = 2; i <= n; i++) {
        curr = previous + secondPrevious;
        secondPrevious = previous;
        previous = curr;
    }
    return curr;
}

/* Above you can eliminate curr from 
function level to for loop levelby doing below */
function fibonacciTabulation(n) {
    let secondPrevious = 0;
    let previous = 1;
    for (let i = 2; i <= n; i++) {
        let curr = previous + secondPrevious;
        secondPrevious = previous;
        previous = curr;
    }
    return previous;
}