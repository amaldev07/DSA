function pow(a: number, b: number): number {
    let ans = 1;
    let base = a;
    while (b > 0) {
        let lastBit = (b & 1);
        if (lastBit == 1) {
            ans = ans * base;
        }
        base = base * base;
        b = b >> 1;
    }
    return ans;
};