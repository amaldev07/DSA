function isMajorityElement(nums: number[], target: number): boolean {
    let start = doBinarySearch1150(nums, target, true);
    let end = doBinarySearch1150(nums, target, false);
    if (start !== -1) {
        return (end - start + 1) > Math.floor(nums.length / 2) ? true : false;
    } else {
        return false;
    }
};

function doBinarySearch1150(nums: number[], target: number, isSearchingFirst): number {
    let s = 0;
    let e = nums.length - 1;
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