/*

Problem Statement #
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

Example 1:

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
Example 2:

Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
Example 3:

Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".

*/

const length_of_longest_substring = function(str, k) {
    // TODO: Write your code here
    let map = new Map();
        len = str.length;
        windowStart = 0;
        max = 0;


    for (let windowEnd = 0; windowEnd < len; windowEnd += 1) {
        let right = str[windowEnd];

        if (!(right in map)) {
            map[right] = 0;
        }

        map[right] += 1;

        while (Object.keys(map).length > 1 && Object.values(map).reduce((a, b) => a + b) - Object.values(map)[0] > k) {
            let left = str[windowStart];
            map[left] -= 1;
            if(map[left] === 0) {
                delete map[left];
            }
            windowStart += 1;
        }
        max = Math.max(max, windowEnd - windowStart + 1);
    }

    return max;
  };
  
  var ans = length_of_longest_substring('ABBB', 2);
  console.log(ans)