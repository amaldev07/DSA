/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    for (let i = 0; i < Math.floor(nums.length); i++) {
        let temp = nums[i];
        nums[i] = nums[nums.length - 1 - i];
        nums[nums.length - 1 - i] = temp;
    }
    for (let i = 0; i < Math.floor(k / 2); i++) {
        let temp = nums[i];
        nums[i] = nums[nums.length - 1 - i];
        nums[nums.length - 1 - i] = temp;
    }
    for (let i = k; i < Math.floor(nums.length / 2); i++) {
        let temp = nums[i];
        nums[i] = nums[nums.length - 1 - i];
        nums[nums.length - 1 - i] = temp;
    }
};