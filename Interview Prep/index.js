function plusOne(digits) {
    let carry = 0;
    for (let i = digits.length - 1; i >= 0; i--) {

        if (i == digits.length - 1) {
            sum = digits[i] + 1;
        } else {
            sum = digits[i] + carry;
            carry = 0;
        }
        let no = Math.floor(sum % 10);
        carry = Math.floor(sum / 10);
        digits[i] = no;
    }
    if (carry > 0) {
        digits.unshift(carry);
    }
    return digits;
};
console.log(plusOne([9])); 
console.log(plusOne([1,2,3])); 