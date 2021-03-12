// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/

/*
Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.

Return the maximum possible length of s.



Example 1:

Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All possible concatenations are "","un","iq","ue","uniq" and "ique".
Maximum length is 4.
Example 2:

Input: arr = ["cha","r","act","ers"]
Output: 6
Explanation: Possible solutions are "chaers" and "acters".
Example 3:

Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
Output: 26
*/

var maxLength = function (arr) {
  let res = 0;

  let solve = (start, curr) => {
      if (curr.length !== new Set(curr.split('')).size) {
          return;
      }

      res = Math.max(res, curr.length);

      for (let i = start; i < arr.length; i++) {
          solve(i + 1, `${curr}${arr[i]}`);
      }
  }

  solve(0, '');

  return res;
};