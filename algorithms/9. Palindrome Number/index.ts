function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }
    let reverse = recPalin(x, 0);
    return (reverse == x) ? true : false;
};
function recPalin(x: number, temp: number): number {
    if (x == 0) {
        return temp;
    }
    let remainder = x % 10;
    temp = temp * 10 + remainder;
    let newx = Math.floor(x / 10);
    // let newx = +(((x / 10) + '').split('.')[0]);
    return recPalin(newx, temp)
}