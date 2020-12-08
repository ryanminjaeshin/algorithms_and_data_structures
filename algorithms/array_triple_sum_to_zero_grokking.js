/*

Problem Statement #
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.

*/

const search_triplets = function(arr) {
  // TODO: Write your code here

  let result = [];
  const len = arr.length;

  for (let p1 = 0; p1 < len; p1 += 1) {

    let p2 = p1 + 1;

    while (p2 < len) {

      let twoSum = arr[p1] + arr[p2];

      var target = - twoSum;

      if (arr.slice(p2 + 1).indexOf(target) > -1) {
        result.push([arr[p1], arr[p2], target])
      }

      p2 += 1;
    }
  }

  return result;
};