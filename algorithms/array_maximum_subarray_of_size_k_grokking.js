/*

Problem Statement #
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

*/

/*

I: positive integer, arr
O: max sum of given size array
C: None
Edeg case: X
Example: See above.

*/


const max_sub_array_of_size_k = function(k, arr) {
    // TODO: Write your code here
    let maxSum = 0;
        sum = 0;
        len = arr.length;
        windowStart = 0;

    for (let windowEnd = 0; windowEnd < len; windowEnd += 1) {
        sum += arr[windowEnd];

        if (windoeEnd >= k) {
            sum -= arr[windowStart];
            windowStart += 1;
        }

        maxSum = Math.max(maxSum, sum)
    }

    return maxSum;
  };
  