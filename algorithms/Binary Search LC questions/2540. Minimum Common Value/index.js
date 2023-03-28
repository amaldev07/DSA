function getCommon1(nums1, nums2) {
    let minVal = -1;
    debugger;
    for (let i = 0; i < nums1.length; i++) {
        minVal = doBinarySearch25401(nums2, nums1[i]);
        if (minVal >= 0) {
            break;
        }
    }
    return minVal;
};

function doBinarySearch25401(nums, target) {
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
getCommon1([1, 2, 3], [2, 4]);