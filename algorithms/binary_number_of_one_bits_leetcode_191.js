// https://leetcode.com/problems/number-of-1-bits/

/*

Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Follow up: If this function is called many times, how would you optimize it?

*/


/* 
Example 1:

Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
Example 2:

Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
Example 3:

Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
*/

/**
 * I: Integers with 0,1
 * O: Number of 1
 * C: None
 * Edge case: None
 * Example: 11101 -> 4;
 */

 /**
  * 
  * First Solution:
  * Chnage integer to array, return sum of the element
  *  
  */

var hammingWeight = function(n) {
    return n.toString(2).split('').filter(x => x === '1').length
};