function reverseBits(n: number): number {
    let revSum = 0;
    for (let i = 0; i < 32; i++) {
        let b = n & 1; //to get the last digit
        n = n >>> 1; // shifting n by one bit right, to change the last bit
        revSum = revSum + b * Math.pow(2, 31 - i);
    }
    return revSum;
};