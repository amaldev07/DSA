function findMissingRanges(nums, lower, upper) {
    if (nums.length == 0) return [[lower, upper]]; //corner case
    let expected = lower;
    let out = [];
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i];
        if (el == expected) {
            expected = expected + 1;
        } else {
            out.push([expected, el - 1]);
            expected = el + 1;
        }
    }
    if (expected <= upper) { // corner case
        out.push([expected, upper]);
    }
    return out;
};