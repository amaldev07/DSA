function searchRangeJs(nums, target) {
    debugger;
    let start = doBinarySrearch(nums, target, true);
    let end = doBinarySrearch(nums, target, false);
    return [start, end];
};

function doBinarySrearchJs(nums, target, isFindingFirst) {
    let ans = -1;
    let s = 0;
    let e = nums.length - 1;
    while (s <= e) {
        let m = Math.floor(s + ((e - s) / 2));
        if (nums[m] > target) {
            e = m - 1
        } else if (nums[m] < target) {
            s = m + 1
        } else {
            ans = m;
            if (isFindingFirst) {
                e = m - 1;
            } else {
                s = m + 1;
            }
        }
    }
    return ans;
}

searchRange([5, 7, 7, 8, 8, 10], 8);