function searchJs(nums, target) {
    debugger;
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + ((end - start) / 2));
        if (target < nums[mid]) {
            end = mid - 1;
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};

search([-1, 0, 3, 5, 9, 12], 9);