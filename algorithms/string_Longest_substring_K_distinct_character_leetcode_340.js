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
    let windowStart = 0;
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

            maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
        }

        return maxLength;
};

// Recap 12/9

const longest_substring_with_k_distinct = function(str, k) {
    // TODO: Write your code here
    let map = new Map();
        len = str.length;
        windowStart = 0;
        max = 0;
  
    for (let windowEnd = 0; windowEnd < len; windowEnd += 1) {
      let right = str[windowEnd]
  
      if (!(map[right] in map)) {
        map[right] = 0;
      }
  
      map[right] += 1;
  
      while (Object.keys(map).length > k) {
        let left = str[windowStart];
        map[left] -= 1;
        if (map[left] === 0) {
          delete map[left];
        }
        windowStart += 1;
      }
  
      max = Math.max(max, windowEnd - windowStart + 1)
    }   
    return max   
  };
  
  // Recap