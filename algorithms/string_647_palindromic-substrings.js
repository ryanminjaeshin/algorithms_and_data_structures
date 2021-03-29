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

//recap
var countSubstrings = function(s) {
    let len = s.length,
        dp = new Array(len).fill().map(() => new Array(len).fill(false));
    
    for (let i = 0; i < len; i ++) {
        dp[i][i] = true;
    }
    
    for (let i = 0; i < len; i ++) {
        if (s[i] === s[i+1]) dp[i][i+1] = true;
    }
    
    for(let i = len - 1; i >= 0; i --) {
        for (let j = i + 2; j < len; j ++) {
            dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
        }
    }
    let temp = dp.map(x => x.filter(Boolean).length);
    return temp.reduce((a, b) => a + b);
};