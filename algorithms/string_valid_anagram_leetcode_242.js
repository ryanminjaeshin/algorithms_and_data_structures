// https://leetcode.com/problems/valid-anagram/

/*


Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

var isAnagram = function(s, t) {
    var a = JSON.stringify(s.split('').sort());
    var b = JSON.stringify(t.split('').sort());
  
    return a === b;
  
  };
    
// another solution

var isAnagram = function(s, t) {
    var map = new Map();
  
    s.split('').map(x => map[x] = map[x] ? map[x] + 1 : 1);
    t.split('').map(x => map[x] = map[x] ? map[x] - 1 : 1);
  
    return Object.values(map).every(y => y === 0)
};