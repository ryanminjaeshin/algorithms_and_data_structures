// Create helper function

const pivot = (arr, start = 0, end = arr.length - 1) => {
    // set pivot 
    let pviot = arr[start];
    // set swapIdx
        // this will be used when we swap the pivot index(start) to swapIdx
    let swapIdx = start;

    // Swap helper function with ES6
    const swap = (arr,i ,j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

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

const quicksort = (arr) => {

}