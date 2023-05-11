function search(nums: number[], target: number): number {
    let middle = findMiddle(nums);
    let [s, e] = [0, nums.length - 1];
    if (target > nums[0] && target < middle) {
        [s, e] = [0, middle];
    } else {
        [s, e] = [middle + 1, nums.length - 1];
    }
    return binarySearch33(nums, target, s, e);
};
function binarySearch33(nums: number[], target: number, s: number, e: number): number {
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
function findMiddle(nums: number[]): number {
    let s = 0;
    let e = nums.length - 1;
    while (s <= e) {
        let m = s + Math.floor((e - s) / 2);
        if (m == s) {
            return m;
        } else if (nums[m] < nums[s]) {
            e = m - 1;
        } else if (nums[m] > nums[s]) {
            s = m;
        }
    }
    return -1;
};