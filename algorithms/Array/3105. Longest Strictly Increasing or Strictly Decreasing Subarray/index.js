/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    let iCount = 1;
    let dCount = 1;
    let maxCount = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            iCount = iCount + 1;
            maxCount = Math.max(maxCount, iCount, dCount);
            dCount = 1;
        }
        if (nums[i] > nums[i + 1]) {
            dCount = dCount + 1;
            maxCount = Math.max(maxCount, iCount, dCount);
            iCount = 1;
        }
        if (nums[i] == nums[i + 1]) {
            iCount = 1;
            dCount = 1;
        }
    }
    return maxCount;
};