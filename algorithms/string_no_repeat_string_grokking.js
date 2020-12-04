/*

Problem Statement #
Given a string, find the length of the longest substring, which has no repeating characters.

Example 1:

Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".
Example 2:

Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".
Example 3:

Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".

*/

const non_repeat_substring = function(str) {
    // TODO: Write your code here
    let windowStart = 0;
        max = 0;
        len = str.length;
        map = new Map();

        for (let windowEnd = 0; windowEnd < len; windowEnd += 1) {
            var rightChar = str[windowEnd];

            if(!(rightChar in map)) {
                map[rightChar] = 0;
            }

            map[rightChar] += 1;

            while(Object.values(map).indexOf(2) > -1) {
                var leftChar = str[windowStart];
                map[leftChar] -= 1;
                windowStart += 1;
            }

            max = Math.max(max, windowEnd - windowStart + 1)
        }

    return max;
  };