/*

Problem Statement #
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0, 1, 1, 4, 9]

*/

const make_squares = function(arr) {
    squares = []
    // TODO: Write your code here
    for (var i = 0; i < arr.length; i ++) {
      squares.push(arr[i] * arr[i]);
    }
    return squares.sort((a,b) => a - b);
};


var make_squares = (arr) => {
    var len = arr.length;
    var square = new Array(len);
    var left = 0;
    var right = len - 1;
    var lastIndex = len - 1;

    while(left <= right) {
        var leftSquare = arr[left] * arr[left];
        var rightSquare = arr[right] * arr[right];

        if (leftSquare > rightSquare) {
            square[lastIndex] = leftSquare;
            left ++;
        } else {
            square[lastIndex] = rightSquare;
            right --;
        }

        lastIndex --;
    }
    
    return square
}

// Recap
practice