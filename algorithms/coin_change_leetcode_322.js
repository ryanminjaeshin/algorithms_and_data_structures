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

1. Create result variable
2. Sort coins array in ascending order
3. Create recursing function
4.  var len = coins.length;
4.  var largestCoin = coins[len - 1]
4.  var quotient = Math.floor(amount / largestCoin);
4.  array.pop();
4.  if quotient is greater than 1
4     amount = amount - (quotient * largestCoin);
4.    result += quotient
4.    if (amount === 0) -> return result;
4.    else recurse
4. else recurse

Return result
*/

var coinChange = function(coins, amount) {
    var result = 0;
    var sortedCoins = coins.sort((a, b) => a, b);
    var recurse (coins, amount)
    recruse (sortedCoins, amount)
    return result;
};