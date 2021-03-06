/*

Problem Statement #
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].

*/

const remove_duplicates = function(arr) {
    // TODO: Write your code here
    var nextNonDuplicate = 1;
    var i = 1;

    while(i < arr.length) {
        if(arr[nextNonDuplicate - 1] !== arr[i]) {
            arr[nextNonDuplicate] = arr[i];
            nextNonDuplicate ++;
        }
        i ++;
    }
    return nextNonDuplicate;
  };

  // recap

  const remove_duplicates = (arr) => {
      let nextDupPointer = 1;

      let i = 1;

      while (i < arr.length) {
          if (arr[nextDupPointer - 1] !== arr[i]) {
              arr[nextDupPointer] = arr[i];
              nextDupPointer += 1;
          }

        i += 1;
      }

      return nextDupPointer;
  }

  const remove_duplicates = function(arr) {
    // TODO: Write your code here
    let nextNonDup = 1;
    let i  = 1;

    while (i < arr.length) {
      if (arr[nextNonDup - 1] !== arr[i]) {
        arr[nextNonDup] = arr[i];
        nextNonDup += 1;
      }

      i += 1;
    }

    return nextNonDup;
  };
