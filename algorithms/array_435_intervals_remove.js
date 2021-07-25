/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    let count = 0;
    if (!intervals.length) return count;
    intervals.sort((a, b) => a[1] - b[1]);
    let prev = intervals[0];
    for (let i = 1; i < intervals.length; i ++) {
        if (prev[1] > intervals[i][0]) count ++
        else prev = intervals[i]
    }
    return count;
};

// recap