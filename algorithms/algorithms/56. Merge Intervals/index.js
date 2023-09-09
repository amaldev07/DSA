function merge(intervals) {
    let i = 0;
    let len = intervals.length;
    let res = [];
    intervals = intervals.sort((a, b) => b[0] > a[0] ? -1 : 1)
    while (i < len - 1) {
        let f = intervals[i];
        let s = intervals[i + 1];
        if (f[1] >= s[0] || s[1] <= f[1]) {
            s[0] = Math.min(f[0], s[0]);
            s[1] = Math.max(f[1], s[1]);
        } else {
            res.push(intervals[i]);
        }
        i = i + 1;
    }
    res.push(intervals[len - 1]);
    return res;

};