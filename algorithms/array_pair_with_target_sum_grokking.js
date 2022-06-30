/*

Problem Statement #
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

Example 1:

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
Example 2:

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11

*/


// two pointers


const pair_with_targetsum = function(arr, target_sum) {
    // TODO: Write your code here
    var left = 0;
    var right = arr.length - 1;

    while(left < right) {
        var sum = arr[left] + arr[right];

        if (sum === target_sum) return [left, right];
        if (sum > target_sum) right --;
        if (sum < target_sum) left ++;
    }

    return [-1, -1]
  }

  pair_with_targetsum([3,5,9,10], 19)

  // Hash table

  const pair_with_targetsum = function(arr, target_sum) {
    // TODO: Write your code here
    var map = new Map();

    for (var i = 0; i < arr.length; i ++) {

        if(map[arr[i]] >= 0) return [map[arr[i]], i]

        map[target_sum - arr[i]] = i;
    }

    return [-1, -1];
  }


const pair_with_targetsum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let targetSum = arr[left] + arr[right];
    if (targetSum === target) return [left, right];
    if (targetSum < target) left ++;
    if (targetSum > target) right --;
  }

  return [-1, -1]
}

const pair_with_targetsum = function(arr, target_sum) {
  // TODO: Write your code here
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum == target_sum) return [left, right];
    if (sum < target_sum) left += 1;
    if (sum > target_sum) right -= 1;
  }

  return [-1, -1];
}

// recap