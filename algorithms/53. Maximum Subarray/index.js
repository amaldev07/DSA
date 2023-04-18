function maxSubArray(nums) {
    let cSum = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (cSum <= 0) cSum = 0;
        cSum = cSum + nums[i];
        max = Math.max(cSum, max);
    }
    return max;
};