function maxProfit(prices: number[]): number {
    let s = 0;
    let e = 1;
    let maxDiff = 0
    while (e < prices.length) {
        if (prices[s] < prices[e]) {
            let diff = prices[e] - prices[s];
            maxDiff = Math.max(maxDiff, diff);
            e = e + 1;
        } else {
            s = e;
            e = e + 1;
        }
    }
    return maxDiff;
};