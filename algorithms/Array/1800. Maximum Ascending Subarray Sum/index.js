/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let maxSum = nums[0];
    let sum = nums[0];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            sum = sum + nums[i + 1]
        } else {
            sum = nums[i + 1];
        }
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum; 
};