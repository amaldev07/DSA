function isPowerOfThree(n: number): boolean {
    return isPwOfThree(0, n);
};
function isPwOfThree(i, n) {
    if (Math.pow(3, i) == n) {
        return true;
    }
    if (Math.pow(2, i) > n) {
        return false;
    }
    return isPwOfThree(i + 1, n);
}