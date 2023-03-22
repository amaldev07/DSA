
function merge1(nums1, m, nums2, n) {
    let [a, b] = [m - 1, n - 1]
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
merge1([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);