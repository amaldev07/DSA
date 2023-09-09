function findDisappearedNumbers(nums: number[]): number[] {
    nums.sort();
    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != (i + 1)) {
            result.push(i + 1);
        }
    }
    return result;
};