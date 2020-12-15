// https://leetcode.com/problems/longest-palindromic-substring/

/*

Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"

*/

/*

I: string
O: string
C: None
Edge case: including special characters?
Example: ahbccba -> bccb

*/



var longestPalindrome = function(s) {
    var lps = '';

    var len = s.length;

    const dp = Array(len).fill(null).map(()=>Array(len).fill(false));

    // first base case
    for (var i = 0; i < len; i++) {
        dp[i][i] = true;
        lps = s[i];
    }

    // second base case
    for (var i = 0; i < len; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            if (dp[i][i + 1]) {
                lps = s.slice(i, i + 2);
            }
        }
    }

    for (var i = len - 1; i >= 0; i--) {
        for (var j = i + 2; j < len; j++) {
            dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
            if (dp[i][j]) {
                lps = lps.length < (j - i + 1) ? s.slice(i, j + 1) : lps
            }
        }
    }

    return lps
};

longestPalindrome('abbc')
//


// recap

var longestPalindrome = function(s) {
    var lps = '';

    var len = s.length;

    const dp = Array(len).fill(null).map(()=>Array(len).fill(false));

    // first base case
    for (var i = 0; i < len; i++) {
        dp[i][i] = true;
        lps = s[i];
    }

    // second base case
    for (var i = 0; i < len; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            if (dp[i][i + 1]) {
                lps = s.slice(i, i + 2);
            }
        }
    }

    for (var i = len - 1; i >= 0; i--) {
        for (var j = i + 2; j < len; j++) {
            dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
            if (dp[i][j]) {
                lps = lps.length < (j - i + 1) ? s.slice(i, j + 1) : lps
            }
        }
    }

    return lps
};