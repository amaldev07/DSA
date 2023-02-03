function maxrepetitionCount(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let count = 1;
    let maxCount = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            count = count + 1;
            maxCount = Math.max(maxCount, count);
        } else {
            count = 1;
        }
    }
    return maxCount;
}