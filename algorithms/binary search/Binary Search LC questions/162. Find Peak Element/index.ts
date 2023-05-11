function findPeakElement(nums: number[]): number {
    let s = 0;
        let e = nums.length -1;
        let mid;
        while (s < e) {
            mid = Math.floor((s + e) / 2);
            if (nums[mid] > nums[mid + 1]) {
                e = mid;
            } else {
                s = mid + 1;
            }
        }
        return s;
    };
     