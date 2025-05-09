/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
        for (let i = 1; i <= n; i++) {
                let sum = getDigitSum(i);
        }
};
function getDigitSum(i) {
        let s = 0;
        while (i > 0) {
                s = s + (i % 10);
                i = Math.floor(i / 10);
        }
        return s;
}