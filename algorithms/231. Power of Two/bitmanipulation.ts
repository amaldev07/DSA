function isPowerOfTwobt(n: number): boolean {
    return isPwOfTwoByBitmanipulation(n);
};
function isPwOfTwoByBitmanipulation(n) {
    if (n <= 0) return false;
    let result = (n & (n - 1)) == 0 ? true : false;
    return result;
}