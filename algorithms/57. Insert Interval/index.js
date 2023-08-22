function insert(intervals, newInterval) {
    // intervals = [[1,3],[6,9]], newInterval = [4,5]
    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[1] < intervals[i][0]) {
            //  push to left
            newInterval.splice(i, newInterval);
            break;
        } else if ((newInterval[0] > intervals[i][1])) {
            // push to righ
            newInterval.splice(i+1, newInterval);
            break;
        } else {
            //  merge
            intervals[i][0] = Math.min(intervals[i][0], newInterval[0]);
            intervals[i][1] = Math.min(intervals[i][1], newInterval[1]);
            break;
        }
    }
};