/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var minMeetingRooms = function(intervals) {
    if (intervals.length <= 1) return intervals.length;
    intervals.sort((a, b) => a[0] - b[0]);
    let res = 0;
    let queue = [];
    for (let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];
        // if the meeting is over, remove
        if (queue.length && queue[0] <= interval[0]) queue.shift();
        queue.push(interval[1]);
        queue.sort((a, b) => a - b);
        res = Math.max(res, queue.length);
    }
    return res;
};