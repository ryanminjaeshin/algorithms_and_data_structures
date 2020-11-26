// https://leetcode.com/problems/valid-parentheses/

/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

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
    var stack = [];
    for (var i = 0; i < s.length; i ++) {
        var bracket = s.charAt(i);
        if (bracket == '(' || bracket == '{' || bracket == '[') {
            stack.push(bracket);
        } else if (bracket === '}' && stack[stack.length - 1] === '{'){
            stack.pop();
        } else if (bracket === ']' && stack[stack.length - 1] === '['){
            stack.pop();
        } else if (bracket === ')' && stack[stack.length - 1] === '('){
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0
};

isValid('()')