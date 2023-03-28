function search1(nums, target) {
    debugger;
    let middle = findMiddle1(nums);
    let [s, e] = [0, nums.length - 1];
    if (target >= nums[0] && target <= nums[middle]) {
        [s, e] = [0, middle];
    } else {
        [s, e] = [middle + 1, nums.length - 1];
    }
    return binarySearch331(nums, target, s, e);
};
search1([5,1,3], 1);
function binarySearch331(nums, target, s, e) {
    while (s <= e) {
        let m = s + Math.floor((e - s) / 2);
        if (nums[m] > target) {
            e = m - 1;
        } else if (nums[m] < target) {
            s = m + 1
        } else {
            return m;
        }
    }
    return -1;
}
function findMiddle1(nums) {
    let s = 0;
    let e = nums.length - 1;
    while (s <= e) {
        let m = s + Math.floor((e - s) / 2);
        if (s == e) {
            return s;
        } else if (nums[m] < nums[m + 1]) {
            s = m + 1;
        } else if (nums[m] > nums[m + 1]) {
            e = m;
        }
    }
    return -1;
};