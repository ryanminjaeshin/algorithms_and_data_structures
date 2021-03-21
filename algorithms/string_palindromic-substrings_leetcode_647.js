/**
 *
 *
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".


Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

 */

/**
 * @param {string} s
 * @return {number}
 */
 var countSubstrings = function(s) {
  let count = 0;

  const helper = (s, low, high) => {
      while (low >= 0 && high < s.length && s[low] === s[high]) {
          count ++;
          low --;
          high ++;
      }
  }
  for (let i = 0; i < s.length; i ++) {
      helper(s, i, i);
      helper(s, i, i + 1)
  }
  return count;
};

