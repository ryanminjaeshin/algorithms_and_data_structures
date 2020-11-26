// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/*


Given a string s, find the length of the longest substring without repeating characters.


Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example 4:

Input: s = ""
Output: 0

*/

// Plan
// Save substring & length propery to object. Return the highest value.

var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var substring = '';

    for (var i = 0; i < s.length; i ++) {
        var index = substring.indexOf(s[i]);
        substring += s[i];

        if (index >= 0) {
            substring = substring.slice(index + 1);
        }

        if (substring.length > max) {
            max = substring.length;
        }
    }

    return max;
};

lengthOfLongestSubstring('dvdf')
