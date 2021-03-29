/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 */

var isValid = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i ++) {
      let par = s[i];
      if (par == '(') stack.push(')');
      else if (par == '[') stack.push(']');
      else if (par == '{') stack.push('}');
      else {
          if (stack.pop() !== par) return false;
      }
  }

  return stack.length == 0;
};

// recap