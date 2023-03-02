function singleNumber(nums: number[]): number {
    let ms = new Map();
    for (let i = 0; i < nums.length; i++) {
        ms.set(nums[i], 1 + (ms.get(nums[i]) || 0))
    }
    for (let [key, value] of ms) {
        if (value == 1) {
            return key;
        }
    }
    return nums[0]
};