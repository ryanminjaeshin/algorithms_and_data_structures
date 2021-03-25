function merge(intervals) {
  if (!intervals.length) return intervals
  intervals.sort((a, b) => a.start !== b.start ? a.start - b.start : a.end - b.end)
  var prev = intervals[0]
  var res = [prev]
  for (var curr of intervals) {
    if (curr.start <= prev.end) {
      prev.end = Math.max(prev.end, curr.end)
    } else {
      res.push(curr)
      prev = curr
    }
  }
  return res
}