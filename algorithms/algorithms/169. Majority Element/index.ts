function majorityElement(nums: number[]): number {
    let ms = new Map();
    let mostCOuntedNUmber = {
        no: nums[0],
        count: 1
    };
    for (let i = 0; i < nums.length; i++) {
        ms.set(nums[i], 1 + (ms.get(nums[i]) || 0));
        if (ms.get(nums[i]) > mostCOuntedNUmber.count) {
            mostCOuntedNUmber = {
                no: nums[i],
                count: ms.get(nums[i])
            }
        }
    }
    return mostCOuntedNUmber.no;
};