/*

Problem Statement #
Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.

Example 1:

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
Example 2:

Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

*/

const fruits_into_baskets = function(fruits) {
    // TODO: Write your code here
    
    let windowStart = 0;
        len = fruits.length;
        map = new Map();
        max = 0;

        for (var windowEnd = 0; windowEnd < len; windowEnd += 1) {
            var rightFruit = fruits[windowEnd];

            if (!(rightFruit in map)) {
                map[rightFruit] = 0;
            }

            map[rightFruit] += 1;

            while (Object.keys(map).length > 2) {
                var leftFruit = fruits[windowStart];
                map[leftFruit] -= 1;

                if (map[leftFruit] === 0) {
                    delete map[leftFruit];
                }

                windowStart += 1;
            }

            max = Math.max(max, windowEnd - windowStart + 1);
        }

    return max;
  };