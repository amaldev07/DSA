function removeDuplicates(nums) {
    let cEl = nums[0];
    let cPos = 0;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (cEl == nums[i]) {
            nums[i] = null;
        } else {
            cEl = nums[i];
            nums[i] = null;
            nums[cPos + 1] = cEl;
            cPos = cPos + 1;
            count = count + 1;
        }
    }
    return count;
};