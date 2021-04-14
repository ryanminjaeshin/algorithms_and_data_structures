var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0])
    let res = [];
    let currentInterval = intervals[0];
    res.push(currentInterval);
    for (let interval of intervals) {
        let currentIntervalBeg = currentInterval[0];
        let currentIntervalEnd = currentInterval[1];
        let nextIntervalBeg = interval[0];
        let nextIntervalEnd = interval[1];
        if (currentIntervalEnd >= nextIntervalBeg) {
            currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
        } else {
            currentInterval = interval;
            res.push(currentInterval)
        }
    }
    return res;
};