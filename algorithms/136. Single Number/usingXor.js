function singleNumber(nums: number[]): number {
    let ms = new Map();
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        num = num ^ nums[i];
    }
    return num;
};