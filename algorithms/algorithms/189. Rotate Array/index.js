/**
 Do not return anything, modify nums in-place instead.
 */
function rotate1(nums, k) {
    k = k % nums.length;
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l = l + 1;
        r = r - 1
    }

    l = 0;
    r = k - 1;
    while (l < r) {
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l = l + 1;
        r = r - 1
    }

    l = k;
    r = nums.length - 1;
    while (l < r) {
        let temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
        l = l + 1;
        r = r - 1
    }

};
rotate([1, 2, 3, 4, 5, 6, 7], 3)