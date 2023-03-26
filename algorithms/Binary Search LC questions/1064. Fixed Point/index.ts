function fixedPoint(arr: number[]): number {
    let s = 0;
    let e = arr.length - 1;
    let ans = -1;
    while (s <= e) {
        let m = Math.floor(s + ((e - s) / 2));
        if (arr[m] < m) {
            s = m + 1;
        } else if (arr[m] > m) {
            e = m - 1;
        } else {
            ans = m;
            e = m-1;
        }
    }
    return ans;
};