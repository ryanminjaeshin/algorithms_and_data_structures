/**
 *
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

It is guaranteed that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.



Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

 */

var maxProduct = function(nums) {
  let len = nums.length,
      prevMax = nums[0],
      prevMin = nums[0],
      result = nums[0];

  for (let i = 1; i < len; i ++) {
      let num = nums[i];
      currMax = Math.max(prevMax * num, num, prevMin * num);
      currMin = Math.min(prevMin * num, num, prevMax * num);

      prevMax = currMax;
      prevMin = currMin;

      result = Math.max(result, currMax)
  }
  return result;
};

