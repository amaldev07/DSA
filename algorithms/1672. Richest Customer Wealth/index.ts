function maximumWealth(accounts: number[][]): number {
    let maxWelth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            sum = sum + accounts[i][j];
        }
        maxWelth = Math.max(maxWelth, sum);
    }
    return maxWelth;
};