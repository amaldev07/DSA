/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let [a, b] = [m - 1, n - 1];
    for (let i = nums1.length - 1; i >= 0; i--) {
        if (a <= -1) {
            nums1[i] = nums2[b];
            b = b - 1;
        } else if (b >= 0) {
            if (nums1[a] >= nums2[b]) {
                nums1[i] = nums1[a];
                a = a - 1;
            } else {
                nums1[i] = nums2[b];
                b = b - 1
            }
        }
    }
};