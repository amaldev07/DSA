/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
        let map = new Map();
        let sumCountMax = 0;
        debugger;
        for (let i = 1; i <= n; i++) {
                let sum = getDigitSum(i);
                if (map.has(sum)) {
                        let count = map.get(sum) + 1;
                        map.set(sum, count);
                        Math.max(sumCountMax, count);
                } else {
                        map.set(sum, 1);
                        Math.max(sumCountMax, 1);
                }
        }
        let maxSumCount = 0;
        map.forEach((count, sum) => {
                if (count == sumCountMax) {
                        maxSumCount = maxSumCount + 1;
                }
        });
        return maxSumCount;
};
function getDigitSum(i) {
        let s = 0;
        while (i > 0) {
                s = s + (i % 10);
                i = Math.floor(i / 10);
        }
        return s;
}
countLargestGroup(13);
