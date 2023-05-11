function getCommon(nums1: number[], nums2: number[]): number {
    let minVal = -1;
    for (let i = 0; i < nums1.length; i++) {
        minVal = doBinarySearch2540(nums2, nums1[i]);
        if (minVal >= 0) {
            break;
        }
    }
    return minVal;
};

function doBinarySearch2540(nums: number[], target: number): number {
    let s = 0;
    let e = nums.length - 1;
    while (s <= e) {
        let m = s + Math.floor((e - s) / 2);
        if (target < nums[m]) {
            e = m - 1;
        } else if (target > nums[m]) {
            s = m + 1;
        } else {
            return nums[m];
        }
    }
    return -1;
};