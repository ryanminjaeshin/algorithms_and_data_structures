// https://leetcode.com/problems/maximum-subarray/

/**
 
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,6]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [0]
Output: 0
Example 4:

Input: nums = [-1]
Output: -1

 */

/**
 * I: array of integers
 * O: integer
 * C: None
 * Edge case: None
 * Example: [1,2,-8,9] -> 9
 */



var maxSubArray = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    };
    return Math.max(...nums);
};

// Recap

var maxSubArray = function(nums) {
    var len = nums.length;
    var dp = new Array(len);
    
    dp[0] = nums[0];
    
    for (var i = 1; i < len; i ++) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
    }
    
  return Math.max(...dp)
};