/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let result = '';
    let carry = 0;
    while (i >= 0 || j >= 0 || carry > 0) {
        let x = i >= 0 ? (+num1[i]) : 0;
        let y = j >= 0 ? (+num2[j]) : 0;
        let sum = x + y + carry;
        carry = 0;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }
    return result;
};