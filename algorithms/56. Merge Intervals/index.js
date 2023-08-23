function merge(intervals) {
    // [[1,3],[2,6],[8,10],[15,18]]
    intervals.sort((x,y)=>x[0]<y[0]);
    let i = 0;
    let c = 0;
    let len = intervals.length;
    while (i < len - 1) {
        let f = intervals[i];
        let s = intervals[i + 1];
        if (f[1] >= s[0] || s[1]<=f[1]) {
            s[0] = Math.min(f[0], s[0]);
            s[1] = Math.max(f[1], s[1]);
            c= c+1;
            i = i + 1;
        } else {
            i = i + 1;
        }
    }
    return intervals.slice(c);

};