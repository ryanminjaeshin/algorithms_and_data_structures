// https://leetcode.com/problems/k-diff-pairs-in-an-array/

/*

Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

0 <= i, j < nums.length
i != j
|nums[i] - nums[j]| == k
Notice that |val| denotes the absolute value of val.

 

Example 1:

Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
Example 2:

Input: nums = [1,2,3,4,5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
Example 3:

Input: nums = [1,3,1,5,4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 // nums[i] - nums[i + 1] = k
 // [0,1,1,2,-2,3,5], 2
 // map = {-2 : 0, -1: 1, -1: 1, 0:2,}
var findPairs = function(nums, k) {
    var map = new Map();
    var result = [];

    for (var i = 0; i < nums.length; i ++) {
        var target = nums[i] - k;
        map[target] = nums[i];
    }

    for (var i = 0; i < nums.length; i ++) {
        if (nums[i] in map) {
            result.push([map[nums[i]], nums[i]])
        }
    }

    return result;
};

var ans = findPairs([3,1,4,1,5], 2);
console.log(ans)

// Recap