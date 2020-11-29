// https://leetcode.com/problems/climbing-stairs/

/**
 
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 */

 /**
  * I: integer
  * O: integer (number of way)
  * C: None
  * Edge case: input 0 or negative
  * Example: input 3 -> output (1,1,1) , (2,1), (1, 2) = 3
  */

// Example
/**
 *  Fibonacci sequence
 * 1, 2, 3, 5, 8, 13, 21
 * 1 = (1) -> 1
 * 2 = (2), (1,1) -> 1 + 1
 * 3 = (2,1) (1,2) (1,1,1) -> 2 + 1
 * 4 = (2,2) (2,1,1) (1,1,2) (1,2,1) (1,1,1,1) -> 1 + 3 + 1
 * 5 = (2,2,1) (2,1,2) (1,2,2) (2,1,1,1) (1,2,1,1) (1,1,2,1) (1,1,1,2) (1,1,1,1,1,1) -> 3 + 4 + 1
 * 6 = (2,2,2) (2,2,1,1) 6개 (2,1,1,1,1) 5개 (1,1,1,1,1,1) 1개 -> 1 + 6 + 5 + 1
 * 7 = (2,2,2,1) 4개 (2,2,1,1,1) 10개 (2,1,1,1,1,1) 6개 (1,1,1,1,1,1,1) -> 4 + 10 + 6 + 1 
 */


var climbStairs = function(n) {
    if (n < 3) {
        return n
    } else {
        return (climbStairs(n - 1) + climbStairs(n - 2));
    }
};

console.log(climbStairs(7));

// another answer

var climbStairs = (n) => {
    var len = n + 1;
    var dp = new Array(len);

    dp[0] = 1;
    dp[1] = 1;
    for (var i = 2; i < len; i ++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }
    return dp[n]
}

// Recap

var climbStairs = function(n) {
    var dp = new Array(n + 1);
    
    dp[0] = 1;
    dp[1] = 1;
    
    for (var i = 2; i < dp.length; i ++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[dp.length - 1]
};