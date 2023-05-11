
function guessNumber(n: number): number {
    let s = 1;
    let e = n;
    while (s <= e) {
        let m = Math.floor((s + e) / 2);
        if (guess(m) == -1) {
            e = m - 1;
        } else if (guess(m) == 1) {
            s = m + 1;
        } else {
            return m;
        }
    }
    return -1;
};


function binarySearch(ary, searchNo) {
    let s = 0;
    let e = ary.length() - 1;
    while (s <= e) {
        h = Math.floor((s + e) / 2);
        if (searchNo > ary[h]) {
            s = h + 1;
        } else if (searchNo < ary[h]) {
            e = h - 1;
        } else {
            return h;
        }
    }
    return -1;
} 