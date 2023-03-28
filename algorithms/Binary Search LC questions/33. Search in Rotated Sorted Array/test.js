function search1(nums) {
    return findMiddle(nums);
};
function findMiddle1(nums) {
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
search([4,5,6,7,0,1,2]);