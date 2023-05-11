function peakIndexInMountainArray(arr: number[]): number {
    return doBinarySearchPeakIndex(arr)
};

function doBinarySearchPeakIndex(nums: number[]): number {
    let s = 0;
    let e = nums.length - 1;
    while (s <= e) {
        let m = s + Math.floor((e - s) / 2);
        if (s == e) {
            return m;
        } else if (nums[m] > nums[m + 1]) {
            e = m;
        } else if (nums[m] < nums[m + 1]) {
            s = m + 1;
        }
    }
    return -1;
};