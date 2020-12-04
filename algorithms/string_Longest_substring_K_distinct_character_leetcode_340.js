// https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/

// Sliding Window

/*

Problem Statement #
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

*/

const lengthOfLongestSubstringKDistinct = function(s, k) {
    let windoeStart = 0;
        maxLength = 0;
        map = new Map();

        for (let windowEnd = 0; windowEnd < s.length; windowEnd += 1) {
            let rightChar = s[windowEnd];

            if (!(rightChar in map)) {
                map[rightChar] = 0;
            }

            map[rightChar] += 1;

            while (Object.keys(map).length > k) {
                let leftChar = s[windowStart];
                map[leftChar] -= 1;
                if (map[leftChar] === 0) {
                    delete map[leftChar]
                }

                windowStart += 1;
            }

            
        }
};