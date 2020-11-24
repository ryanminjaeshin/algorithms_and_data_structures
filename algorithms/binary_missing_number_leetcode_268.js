// https://leetcode.com/problems/missing-number/

/**
 Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
 
Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
*/


/**
 * I: array of integers
 * O: integer
 * C: None
 * Edge case: what if there is no missing integer
 * Example: [0,1,3] -> 2
 */
var missingNumber = function(nums) {
    var len = nums.length + 1
    var sortedNums = nums.sort((a, b) => a - b);
    var compareArr = [...Array(len).keys()];
    console.log(sortedNums);
    console.log(compareArr)
    for (var i = 0; i < compareArr.length; i ++) {
      if (sortedNums[i] !== compareArr[i]) {
        return compareArr[i];
      }
    }
    return null;
};

// Another solution

var missingNumber = (nums) => {
    var len = nums.length;
    var sum1 = (len * (len + 1)) / 2;
    var sum2 = nums.reduce((a, b) => a + b);
    return sum1 - sum2
}