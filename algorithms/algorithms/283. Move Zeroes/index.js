/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let pos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            if (pos != i) {
                nums[pos] = nums[i];
                nums[i] = 0;
            }
            pos = pos + 1;
        }
    }
};