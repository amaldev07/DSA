findMin([3, 4, 5, 1, 2]);
function findMin(nums) {
    let pivot = pivotInRotatedArray(nums);
    if (pivot == (nums.length - 1)) {
        return nums[0];
    } else {
        return nums[pivot + 1];
    }
};

function pivotInRotatedArray(ar) {
    let s = 0;
    let e = ar.length - 1;
    while (s <= e) {
        let m = Math.floor(s + ((e - s) / 2));
        if (s == e) { // for [1], [1,3] on 2nd iteration
            return s;
        }
        else if (ar[m] > ar[m + 1]) {
            return m;
        } else {
            if (ar[s] == ar[m]) { //for [1,3]
                s = m + 1;
            }
            else if (ar[s] < ar[m]) {
                s = m;
            } else if (ar[s] > ar[m]) {
                e = m;
            }
        }
    }
}