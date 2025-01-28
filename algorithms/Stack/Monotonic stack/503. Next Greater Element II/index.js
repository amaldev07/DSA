/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let stack = [];
    let n = nums.length;
    let ngeMap = new Array(n).fill(-1);
    for (let i = ((2 * n) - 1); i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= nums[i % n]) {
            stack.pop();
        }
        if (stack.length <= 0) {
            ngeMap[i % n] = -1;
        } else {
            ngeMap[i % n] = stack[stack.length - 1];
        }
        stack.push(nums[i % n]);
    }
    return ngeMap;
};