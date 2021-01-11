// Create helper function
const pivot = (arr, start = 0, end = arr.length - 1) => {

    // Swap helper function with ES6
    const swap = (arr,i ,j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    // set pivot 
    let pivot = arr[start];
    // set swapIdx
        // this will be used when we swap the pivot index(start) to swapIdx
    let swapIdx = start;

    // Iterate over an array
    for (let i = start + 1; i < arr.length; i ++) {
        // if the element is smaller than pivot, 
        if (pivot > arr[i]) {
            // increment swapIdx
            swapIdx ++;
            // and swap it
            swap(arr, swapIdx, i)
        } 
    }

    // At the end, swap the pivot index(start) with swapIdx
    swap(arr, start, swapIdx)

    // return swapIdx
    return swapIdx
}


// Quicksort function

const quickSort = (arr, left = 0, right = arr.length - 1) => {

    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

var a = [-2, 199, - 382, 3, 2, 6, 6, 1, 0, 421];
var b = [6,5,7,4,8,3,9,2,0,1]
quickSort(a);
quickSort(b);

// Recap