/*
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
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

  // Recap 12/9

  const non_repeat_substring = function(str) {
    // TODO: Write your code here
    let max = 0;
        windowStart = 0;
        len = str.length;
        map = new Map();
  
    for (let windowEnd = 0; windowEnd < len; windowEnd += 1) {
      let right = str[windowEnd];
  
      if (!(right in map)) {
        map[right] = 0
      }
  
      map[right] += 1;
  
      while(Object.values(map).indexOf(2) > -1) {
        let left = str[windowStart];
        map[left] -= 1;
        windowStart += 1;
      }
  
      max = Math.max(max, windowEnd - windowStart + 1);
    }
  
    return max;
  };

  // Recap 12/9

  const non_repeat_substring = function(str) {
    // TODO: Write your code here
    let string = '';
        len = str.length;
        max = 0;
  
    for (let i = 0; i < len; i += 1) {
      let index = string.indexOf(str[i]);
      string += str[i]
  
      if (index > -1) {
        string = string.slice(index + 1);
      }
  
      max = Math.max(max, string.length)
    } 
    return max;
  };
  
  // recap

  var lengthOfLongestSubstring = function(s) {
    let map = {},
        left = 0,
        max = 0;
    for (let right = 0; right < s.length; right ++) {
        let rightChar = s[right];
        if(!map[rightChar]) map[rightChar] = 0;
        map[rightChar] ++;
        
        while (map[rightChar] > 1) {
            let leftChar = s[left];
            map[leftChar] --;
            left ++;
        }
        max = Math.max(max, right - left + 1);
    }
    return max;
};

// recap

/**
 * @param {string} s
 * @return {number}
 */

// S = 'abcda'
 var lengthOfLongestSubstring = function(s) {
    let map = {};
    let result = 0;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < s.length; windowEnd ++) {
      let right = s[windowEnd];
      if (!map[right]) map[right] = 0;
      map[right] += 1;

      while (map[right] > 1) {
        let left = s[windowStart];
        map[left] -= 1;
        windowStart += 1;
      }
      result = Math.max(result, windowEnd - windowStart + 1);
    }
    return result;
};