function numberOfArithmeticSlices2(nums: number[]): number {
    if (nums.length < 3) return 0
    let count = 0;
    let l = 0;
    let preDiff = nums[1] - nums[0];
    for (let r = 2; r < nums.length; r++) {
        let locDiff = nums[r] - nums[r - 1];
        if (locDiff == preDiff) {
            count = count + 1;
            /* let tl = l;
            while (r - tl > 2) {
                tl = tl + 1;
                count = count + 1;
            } */
            if (r - l > 2) {
                count = count + r - l - 2;
            }
        } else {
            l = r;
        }
        preDiff = locDiff;
    }
    return count;
};