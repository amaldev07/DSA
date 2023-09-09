function insert(intervals, newInterval) {
    // intervals = [[1,3],[6,9]], newInterval = [4,5]
    let res = [];
    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[1] < intervals[i][0]) {
            res.push(newInterval);
            return [...res, ...intervals.slice(i)]
        } else if ((newInterval[0] > intervals[i][1])) {
            res.push(intervals[i])
        } else {
            newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
            newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        }
    }
    res.push(newInterval);
    return res;
};