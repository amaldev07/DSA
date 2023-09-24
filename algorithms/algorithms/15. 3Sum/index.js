function threeSum(nums) {
    debugger;
    nums.sort.sort((a,b)=>a-b);
    let res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        while (i > 0 && (nums[i] == nums[i - 1])) {
            continue;
        };
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let a = nums[i];
            let b = nums[j];
            let c = nums[k];
            if ((a + b + c) > 0) {
                k = k - 1;
            } else if ((a + b + c) < 0) {
                j = j + 1;
            } else {
                res.push([a, b, c]);
                j = j + 1;
                k = k - 1;
                while (nums[j] == nums[j - 1]) {
                    j++;
                };
                while (nums[k] == nums[k + 1]) {
                    k--;
                };
            }
        }
    }
    return res;
};

threeSum([-1, 0, 1, 2, -1, -4]);