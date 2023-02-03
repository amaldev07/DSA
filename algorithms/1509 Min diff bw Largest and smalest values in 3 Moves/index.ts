// [1,5,0,10,14]
function minDifference(nums: number[]): number {
    if (nums.length < 4) {
        return 0;
    }
    nums.sort((a, b) => a - b);
    let minDiff = nums[nums.length - 1] - nums[0];
    for (let i = 0; i < 4; i++) {
        minDiff = Math.min(minDiff, (nums[nums.length - 1 - 3 + i] - nums[i]));
    }
    return minDiff;
};