// https://leetcode.com/problems/contains-duplicate/


/*

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true

*/

/**
 * I: Array of integers
 * O: boolean, true if there is duplicate
 * C: None
 * Edge case: None
 * Example: [1,2,3] -> false, [1,2,2,3] -> true
 */

var containsDuplicate = function(nums) {
    var storage = new Map();
    for (var i = 0; i < nums.length; i ++) {
        if(storage[nums[i]] === undefined) {
            storage[nums[i]] = 1;
        } else {
            storage[nums[i]] += 1;
        }
    }

    if (Object.values(storage).sort((a,b) => b - a)[0] > 1) {
      return true;
    } else {
      return false;
    }
};

containsDuplicate([1,2,3])