function search(nums, target) {
    debugger;
    let pivot = pivotInRotatedArray(nums);
    if (target == nums[pivot]) {
        return pivot;
    }
    else if (target >= nums[0] && target <= nums[pivot]) {
        return binarySearch(nums, 0, pivot, target);
    } else {
        return binarySearch(nums, pivot + 1, nums.length - 1, target);
    }
};
function binarySearch(ary, low, high, searchNo) {
    while (low <= high) {
        // let mid = Math.floor((low + high) / 2);
        let mid = Math.floor(low + ((high - low) / 2));
        if (searchNo > ary[mid]) {
            low = mid + 1;
        } else if (searchNo < ary[mid]) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

function pivotInRotatedArray(ar) {
    let s = 0;
    let e = ar.length - 1;
    while (s <= e) {
        let m = Math.floor(s + ((e - s) / 2));
        if (s == e) {
            return s;
        }
        else if (ar[m] > ar[m + 1]) {
            return m;
        } else {
            if (ar[s] == ar[m]) {
                s = m + 1;
            } else if (ar[s] < ar[m]) {
                s = m;
            } else if (ar[s] > ar[m]) {
                e = m;
            }
        }
    }
}

search([1, 3], 0);