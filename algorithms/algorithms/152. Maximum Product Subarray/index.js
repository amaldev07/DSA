function maxProduct(nums) {
    let cMin = 1;
    let cMax = 1;
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let tempMin = cMin;
        cMin = Math.min(cMax * nums[i], cMin * nums[i], nums[i])
        cMax = Math.max(cMax * nums[i], tempMin * nums[i], nums[i])
        max = Math.max(max, cMax);
    }
    return max;
};