function findMaxConsecutiveOnes(nums: number[]): number {
    let count = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count = count + 1;
            max = count > max ? count : max;
        } else {
            count = 0;
        }
    }
    return max;
};