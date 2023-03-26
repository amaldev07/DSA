function plusOne(digits: number[]): number[] {
    let c = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
        let d = digits[i];
        let sum = 0;
        if (i == digits.length - 1) {
            sum = (d + 1);
        } else {
            sum = (d + c);
        }
        digits[i] = sum % 10;
        c = Math.floor(sum / 10);
    }
    if (c > 0) {
        digits.unshift(c);
    }
    return digits;
};