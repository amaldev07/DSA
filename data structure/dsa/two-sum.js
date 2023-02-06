//Input: nums = [3,2,4], target = 6
function twoSum(nums: number[], target: number): number[] {
    let output = null;
    for (let i = 0; i < nums, length; i++) {
        let x = nums[i];
        let y = target - x;
        
        if (nums.includes(y)) {
            output = [nums.indexOf(x), nums.indexOf(y)]
            break;
        }
    }
};