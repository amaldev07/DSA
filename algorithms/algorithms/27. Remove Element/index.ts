function removeElement(nums: number[], val: number): number {

    let c = 0;
    let i = 0;
    let r = -1;
    while (i <= nums.length - 1) {
        if (nums[i] == val) {
            nums[i] = 0;
            r = r >= 0 ? r : i;
        } else {
            c = c + 1;
            if (r >= 0) {
                nums[r] = nums[i];
                r = r + 1;
            }
        }
        i++;
    }
    return c;
};