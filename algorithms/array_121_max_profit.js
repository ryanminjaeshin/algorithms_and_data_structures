// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/**
 Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
*/

/*
I: Array
O: Integer (largest diff (in order / negative))
C:?
Edge case:
Example: [1,2,3,4,5] -> 4 (1 - 5)

PLAN

iterate two times, save every diff of the element without duplication
save the result in the array.
sort the result array
return the 0 index with absolute value
*/


var maxProfit = function(prices) {
    var resultArr = [];
    for (var i = 0; i < prices.length; i ++) {
        for (var j = i + 1; j < prices.length; j ++) {
            var profit = prices[i] - prices[j];
            if (profit < 0) {
                resultArr.push(profit);
            }
        }
    }
    if (resultArr.length === 0) {
      return 0;
    }
    var sortResult = resultArr.sort((a, b) => a - b)
    console.log(sortResult)
    return Math.abs(sortResult[0]);
};

maxProfit([1,2,4,7,11])

// Another solution

var maxProfit = function(prices) {
    let max = 0;
    let min = Infinity;
    for(let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }

    return max;
};

// Recap

var maxProfit = function(prices) {

    var min = Infinity;
    var max = 0;

    for (var i = 0; i < prices.length; i ++) {
        var price = prices[i]
        min = Math.min (min, price);
        max = Math.max (max, price - min);
    }

    return max;
};

// recap
// Recap
// recap
// recap