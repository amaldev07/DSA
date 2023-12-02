function maxOperations(nums: number[], k: number): number {
    let hm = new Map();
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let x = nums[i];
        let y = k - x;
        if (hm.get(y) && hm.get(y) > 0) {
            let hmCount = hm.get(y);
            count = count + 1;
            hm.set(y, hmCount - 1);
        } else {
            hm.set(x, (hm.get(x) || 0) + 1);
        }
    }
    return count;
};