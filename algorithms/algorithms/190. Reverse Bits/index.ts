function reverseBits(n: number): number {
    let revSum = 0;
    for (let i = 0; i < 32; i++) {
        let b = n & 1;
        n = n >>> 1;
        revSum = revSum + b * Math.pow(2, 31 - i);
    }
    return revSum;
};