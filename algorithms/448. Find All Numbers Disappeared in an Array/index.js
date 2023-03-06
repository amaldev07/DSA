function findDisappearedNumbers(nums) {
    debugger;
    nums.sort();
    let target = nums[nums.length - 1];
    let no = 1;
    let i = 0;
    let result = [];
    while (no <= target) {
        if (nums[i] != no) {
            result.push(nums[i])
            i = i + 1;
            // no = no + 1;
        } else {
            no = no + 1;
            i = i + 1;
        }
    }
    return result;
}
findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
