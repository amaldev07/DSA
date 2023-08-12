/* function findLengthOfLCIS(nums) {
    if (nums.length == 1) return 1;
    let i = 0;
    let j = 1;
    let max = 1;
    for (let k = 0; k < nums.length; k++) {
        if (nums[k + 1] > nums[k]) {
            max = Math.max(j - i + 1, max);
            j = j + 1;
        } else {
            i = k + 1;
            j = i + 1;
        }
    }
    return max;
}; */

function findLengthOfLCIS(nums) {
    if (nums.length == 1) return 1;
    let max = 1;
    let count = 1;
    let prev = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > prev) {
            count = count + 1;
            max = Math.max(max, count);
        } else {
            count = 1;
        }
        prev = nums[i];
    }
    return max;
};