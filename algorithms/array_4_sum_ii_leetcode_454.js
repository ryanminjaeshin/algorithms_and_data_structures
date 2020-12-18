// https://leetcode.com/problems/4sum-ii/

/*

Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.

Example:

Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

Output:
2

Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0

*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let map = new Map();
        len = A.length;
        result = 0;

    for (let i = 0; i < len; i ++) {
        for (let j = 0; j < len; j ++) {
            let subSum = A[i] + B[j];
            
            if(!map[subSum]) map[subSum] = 0;

            map[subSum] += 1;
        }
    }

    for (let i = 0; i < len; i ++) {
        for (let j = 0; j < len; j ++) {
            let subSum2 = C[i] + D[j];
            
            if (map[-subSum2]) {
                result += map[-subSum2]
            }
        }
    }

    return result;

};