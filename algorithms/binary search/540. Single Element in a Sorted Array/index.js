function singleNonDuplicate(nums) {
    let s = 0;
    let e = nums.length - 1;
    while (s <= e) {
        let m = Math.floor(s + ((e - s) / 2));
        if (s == e) {
            return nums[s];
        }
        if (nums[m] == nums[m + 1]) {
            if ((m % 2 == 0)) {
                s = m + 2;
            } else {
                e = m - 1;
            }
        } else if (nums[m] == nums[m - 1]) {
            if (((m - 1) % 2 == 0)) {
                s = m + 1;
            } else {
                e = m - 2;
            }
        } else {
            return nums[m];
        }
    }
};