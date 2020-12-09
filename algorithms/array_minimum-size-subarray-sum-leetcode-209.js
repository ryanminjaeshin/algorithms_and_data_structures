// https://leetcode.com/problems/minimum-size-subarray-sum/

/*

Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example: 

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.

*/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */


var minSubArrayLen = function(s, nums) {
    var min = Infinity;
        sum = 0;
        windowStart = 0;
        len = nums.length;

        for (var windowEnd = 0; windowEnd < len; windowEnd += 1) {

            var rightNum = nums[windowEnd]

            sum += rightNum;

            while (sum >= s) {
                var leftNum = nums[windowStart]
                min = Math.min(min, windowEnd - windowStart + 1);
                sum -= leftNum;
                windowStart += 1;
            }
        }

        return min === Infinity ? 0 : min;
};

// Recap 12/9

const smallest_subarray_with_given_sum = function(s, arr) {
    // TODO: Write your code here
    let minLen = Infinity;
        sum = 0;
        len = arr.length;
        windowStart = 0;
  
    for (let windowEnd = 0; windowEnd < len; windowEnd += 1) {
  
      sum += arr[windowEnd];
  
      while (sum >= s) {
        minLen = Math.min(minLen, windowEnd - windowStart + 1);
        sum -= arr[windowStart];
        windowStart += 1;
      }
    }
  
    return minLen === Infinity ? 0 : minLen
  };