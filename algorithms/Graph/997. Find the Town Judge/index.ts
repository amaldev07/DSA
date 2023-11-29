function findJudge(n: number, trust: number[][]): number {
    let judge = -1;
    let trusted = new Array(n + 1).fill(0);
    let trusting = new Array(n + 1).fill(0);
    trusted[0] = 1;
    for (let i = 0; i < trust.length; i++) {
        let p = trust[i][0];
        trusted[p] = 1;
        trusting[trust[i][1]]++;
    }
    for (let i = 1; i < n + 1; i++) {
        /* 
        why && trusting[i] == n - 1
        b/z except Judge everone trusts Judge
         */
        if (trusted[i] == 0 && trusting[i] == n - 1) {
            return i;
        }
    }
    return judge;
};