function doBinarySearch(tar) {
    let arr = [1, 2, 4, 5, 7, 8, 44, 55, 77, 85];
    // let target = 44;
    let target = tar;
    search(arr, target, 0, arr.length - 1);
}

function search(arr, target, s, e) {
    if (s > e) {
        return -1;
    }
    let mid = Math.floor((s + (e - s)) / 2);
    if (target == arr[mid]) {
        return mid;
    }
    if (target < arr[mid]) {
        return search(arr, target, s, mid - 1);
    }
    return search(arr, target, mid + 1, e);
}