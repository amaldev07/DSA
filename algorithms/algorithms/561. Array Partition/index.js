/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    // Step 1: Sort the array in ascending order
    nums.sort((a, b) => a - b);

    // Step 2: Sum every other element
    let maxSum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        maxSum += nums[i];
    }

    return maxSum;
};

// Example Usage
const nums = [1, 4, 3, 2];
console.log(arrayPairSum(nums)); // Output: 4
