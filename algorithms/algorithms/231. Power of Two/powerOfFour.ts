function isPowerOfisPwOfFour(n: number): boolean {
    return isPwOfFour(0, n);
};
function isPwOfFour(i, n) {
    if (Math.pow(4, i) == n) {
        return true;
    }
    if (Math.pow(2, i) > n) {
        return false;
    }
    return isPwOfFour(i + 1, n);
}