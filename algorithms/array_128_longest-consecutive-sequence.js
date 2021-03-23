/**
 *
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.



Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9


 */

var longestConsecutive = function(nums) {
  if (!nums || nums.length === 0) return 0;
  let set = new Set(nums),
      max = 0;
  for (num of set) {
      if (set.has(num - 1)) continue;

      let currentMax = 1;
      let currentNumber = num;

      while(set.has(currentNumber + 1)) {
          currentMax += 1;
          currentNumber += 1;
      }
      max = Math.max(max, currentMax)
  }
  return max
};

// O(N), O(N)