function findNumbers(nums: number[]): number {
    let coountEvNo = 0;
    for (let i = 0; i < nums.length; i++) {
        if ((getNoOfDigits(nums[i]) % 2) == 0) {
            coountEvNo = coountEvNo + 1;
        }
    }
    return coountEvNo;
};
/* Using log10 to get no of digit in a number */
function getNoOfDigits(n: number): number {
    if (n < 0) {
        n = n * -1;
    }
    if (n == 0) {
        return 1;
    }
    return (Math.floor(Math.log10(n)) + 1);
}

function getNoOfDigits1(n) {
    if (n < 0) {
        n = n * -1;
    }
    if (n == 0) {
        return 1;
    }
    let count = 0;
    while (n > 0) {
        count = count + 1;
        n = Math.floor(n / 10);
    }
    return count;
}