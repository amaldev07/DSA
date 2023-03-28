function merge(intervals) {
    // [[1,3],[2,6],[8,10],[15,18]]
    let out = [];
    let start = 0;
    let end = 0;
    for (let i = 0; i < intervals.length; i++) {
        let el = intervals[i];
        if (start < el[0] && end < el[0]) {
            start = el[0];
            end = el[1];
        } else {
            start = Math.min(el[0], start);
            end = Math.max(el[0], end);
        }
        out.push([start, end]);
    }
    return out;

};