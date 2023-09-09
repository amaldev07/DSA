// [4,3,2,7,8,2,3,1]
// [1, 2, 2, 3, 3, 4, 7, 8]
// [1, 2, 2, 2, 3, 3, 4, 7, 8]
function findDuplicates(nums: number[]): number[] {
    nums.sort((a, b) => a - b);
    let repeats: number[] = [];
    let count = 0;
    let current = nums[0];
    let i = 1;
    while (i < nums.length) {
        if (nums[i] == current) {
            count = count + 1;
            if (count = 1) {
                repeats.push(nums[i]);
            }
            i = i + 1;
        } else {
            count = 0;
            current = nums[i];
            i = i + 1;
        }
    }
    return repeats;
};