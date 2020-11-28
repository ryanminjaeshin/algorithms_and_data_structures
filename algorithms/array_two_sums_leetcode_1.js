// https://leetcode.com/problems/two-sum/

/*
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 */

/**
 * I: number of arrays, and target integer;
 * O: indexes of two numbers
 * C: ?
 * Edge case: none
 * Example: [1,2,3,4], 7 -> [2,3]
 */

var twoSum = function(nums, target) {
    var comp = new Map();
    var len = nums.length;

    for (var i = 0; i < len; i ++) {
      if (comp[nums[i]] >= 0) {
        return [comp[nums[i]], i]
      }
      comp[target - nums[i]] = i
    }
    return [];
};

// Recap 

var twoSum = function(nums, target) {
  var map = new Map();
  
  var len = nums.length;
  
  for (var i = 0; i < len; i ++) {
      var num = nums[i]
      if (map[num] >= 0) {
          return [i, map[num]]
      }
      
      map[target - num] = i;
  }
};