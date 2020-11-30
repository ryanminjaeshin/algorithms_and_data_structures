// https://leetcode.com/problems/maximum-average-subarray-i/

var findMaxAverage = function(nums, k) {
    var max = -Infinity;
    var sum = 0;
    var windowStart = 0;
    
    for (var windowEnd = 0; windowEnd < nums.length; windowEnd ++) {
        
        sum += nums[windowEnd];
        
        if (windowEnd >= k - 1) {
            max = Math.max (max, sum)
            sum -= nums[windowStart]
            windowStart ++;
        }
    }
    
    return max / k
};