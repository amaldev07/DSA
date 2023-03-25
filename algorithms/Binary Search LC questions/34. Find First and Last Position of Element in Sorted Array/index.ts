function searchRange(nums: number[], target: number): number[] {
    let start: number = doBinarySrearch(nums, target, true);
    let end: number = doBinarySrearch(nums, target, false);
    return [start, end];
};

function doBinarySrearch(nums: number[], target: number, isFindingFirst): number {
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