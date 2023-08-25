function containsNearbyDuplicate(nums, k) {
    let hm = new Map();
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i];
        if (hm.get(el) != null) {
            let x = hm.get(el);
            if (Math.abs(x - i) <= k) {
                return true
            } else {
                hm.set(el, i);
            }
        } else {
            hm.set(el, i);
        }
    }
    return false;
};