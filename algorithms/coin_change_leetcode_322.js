// https://leetcode.com/problems/coin-change/

/*

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
Example 4:

Input: coins = [1], amount = 1
Output: 1
Example 5:

Input: coins = [1], amount = 2
Output: 2

*/

/*

I: array, integer
O: integer
C: None
Edge case: None
Example: [1,2,3], 6 -> 2

*/

/* PLAN

DP (Bottom Up Approach)

*/

var coinChange = function(coins, amount) {
    var len = amount + 1;
    var dp = new Array(len).fill(len);
    dp[0] = 0;
    for (var i = 0; i < len; i ++) {
        for (coin of coins) {
            if(i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }
    return dp[amount] === len ? -1 : dp[amount]
};