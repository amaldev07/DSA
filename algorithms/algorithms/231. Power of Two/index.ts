function isPowerOfTwo(n: number): boolean {
    return isPwOfTwo(0, n);
};
function isPwOfTwo(i, n) {
    if (Math.pow(2, i) == n) {
        return true;
    }
    if (Math.pow(2, i) > n) {
        return false;
    }
    return isPwOfTwo(i + 1, n);
}