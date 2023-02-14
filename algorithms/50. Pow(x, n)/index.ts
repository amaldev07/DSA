// https://leetcode.com/problems/powx-n/description/
function myPow(x: number, n: number): number {
    if (n < 0) {
        return 1 / pow(x, -n);
    } else {
        return pow(x, n);
    }
};

function pow(x: number, n: number): number {
    if (n == 1) {
        return x;
    }
    if (n == 0) { // for 2^0
        return 1;
    }
    let section = pow(x, Math.floor(n / 2));
    if (n % 2 == 0) {
        return section * section;
    } else {
        return x * section * section;
    }
};