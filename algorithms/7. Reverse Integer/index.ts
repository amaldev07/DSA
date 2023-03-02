function reverse(x: number): number {
    if (x < 0) {
        return -1 * (reverseAll(-1 * x));
    }
    return reverseAll(x);
};
function reverseAll(x: number): number {
    let rev = 0;
    while (x > 0) {
        let mod = x % 10;
        rev = (rev * 10) + mod;
        x = Math.floor(x / 10);
    }
    return (rev > (Math.pow(2, 31) - 1)) ? 0 : rev;

}