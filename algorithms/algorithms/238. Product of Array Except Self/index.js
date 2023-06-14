function productExceptSelf(nums: number[]): number[] {
    let res = [];
    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = prefix;
        prefix = prefix * nums[i];
    }
    console.log(res)
    prefix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = prefix * res[i];
        prefix = prefix * nums[i];
    }
    return res;
};