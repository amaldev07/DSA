// function ceilingOfNumber(nums: number[], target: number): number {
function ceilingOfNumber(nums, target) {
    let s = 0;
    let e = nums.length - 1;
    while (s <= e) {
        let m = Math.floor(s + ((e - s) / 2));
        if (target < nums[m]) {
            e = m - 1;
        } else if (target > nums[m]) {
            s = m + 1;
        } else { // target == m 
            return nums[m]
        }
    }
    return nums[s];
};

ceilingOfNumber([1, 3, 5, 6], 2);