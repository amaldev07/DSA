function reverseBits(n: number): number {
    let sn = n + '';
    let nuSum = 0;
    for (let i = 0; i < sn.length; i++) {
        nuSum = nuSum + ((+sn[i]) * Math.pow(2, i));
    }
    return nuSum;
};