/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    if (!intervals.length) return [newInterval];
    let len = intervals.length;
    let i = 0;
    let res = [];
    while (i < len && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
        i ++
    }
    while (i < len && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i ++
    }
    res.push(newInterval)
    while (i < len) {
        res.push(intervals[i]);
        i++
    }
    return res;
};