function isMajorityElementJs(nums, target) {
    debugger;
    let start = doBinarySearch(nums, target, true);
    let end = doBinarySearch(nums, target, false);
    if (start !== -1) {
        return (end - start + 1) > Math.floor(nums.length / 2) ? true : false;
    } else{
        return false;
    }
};

function doBinarySearchJs(nums, target, isSearchingFirst) {
    let s = 0;
    let e = nums.length-1;
    let ans = -1;
    while (s <= e) {
        let m = s + Math.floor((e - s) / 2);
        if (target < nums[m]) {
            e = m - 1;
        } else if (target > nums[m]) {
            s = m + 1;
        } else {
            ans = m;
            if (isSearchingFirst) {
                e = m - 1;
            } else {
                s = m + 1;
            }
        }
    }
    return ans;
};
isMajorityElement([10], 101)