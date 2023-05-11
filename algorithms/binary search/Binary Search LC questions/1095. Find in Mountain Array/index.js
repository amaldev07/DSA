var findInMountainArray = function(target, mountainArr) {
    debugger;
    let peakIndex = peekInMountainArrray1095(mountainArr);
    let targetIndex;
    targetIndex = binarySearchPeak(mountainArr, 0, peakIndex, target);
    if (targetIndex == -1) {
        targetIndex = binarySearchPeakDesc(mountainArr, peakIndex + 1, mountainArr.length() - 1, target);
    }
    return targetIndex;
};

function peekInMountainArrray1095(ary) {
    let s = 0;
    let e = ary.length() - 1;
    while (s < e) {
        let mid = Math.floor((s + e) / 2);
        if (ary.get(mid) > ary.get(mid + 1)) {
            e = mid;
        } else {
            s = mid + 1;
        }
    }
    return s;
}
function binarySearchPeak(ary, low, high, searchNo) {
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (searchNo > ary.get(mid)) {
            low = mid + 1;
        } else if (searchNo < ary.get(mid)) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}
function binarySearchPeakDesc(ary, low, high, searchNo) {
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (searchNo > ary.get(mid)) {
            high = mid - 1;
        } else if (searchNo < ary.get(mid)) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}
findInMountainArray(3, [1, 2, 3, 4, 5, 3, 1]);
