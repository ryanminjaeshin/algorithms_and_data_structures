// https://leetcode.com/problems/fibonacci-number/

/*

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).

 

Example 1:

Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

*/

/*

I: integer
O: integer
C: None
Edge case: When input is negative number, return null;
Example: (1) -> 1, (3) -> 2

*/


var fib = (n) => {
    var len = n + 1;
    var dp = new Array(len);
    dp[0] = 0;
    dp[1] = 1;
    for (var i = 2; i < len; i ++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }
    return dp[n]
}

//Recap