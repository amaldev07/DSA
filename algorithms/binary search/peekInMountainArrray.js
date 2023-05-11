/* function peekInMountainArrray(ary, s, e) {
    while (s <= e) {
        mid = Math.floor((s + e) / 2);
        if (ary[s] == ary[e]) {
            return ary[s];
        } else if (ary[mid] > ary[mid + 1]) {
            e = mid;
        } else {
            s = mid + 1;
        }
    }
} */
function peekInMountainArrray(ary) {
    let s = 0;
    let e = ary.length -1;
    while (s < e) {
        mid = Math.floor((s + e) / 2);
        if (ary[mid] > ary[mid + 1]) {
            e = mid;
        } else {
            s = mid + 1;
        }
    }
    return ary[s];
}
peekInMountainArrray([1,2,3,1]);