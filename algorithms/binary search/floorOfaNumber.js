/*  
[2,3,5,6,8,9]
floorOfNumber(7) == 6 
*/
function floorOfNumber(nums, target) {
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
    return nums[e];
};

floorOfNumber([1, 3, 5, 6], 2);