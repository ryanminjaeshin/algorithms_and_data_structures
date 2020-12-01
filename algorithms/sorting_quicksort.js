// Create helper function

const pivot = (arr, start = 0, end = arr.length) => {
    // set pivot 
    let pviot = arr[start];
    // set swapIdx
        // this will be used when we swap the pivot index(start) to swapIdx
    let swapIdx = start;

    // Swap helper function with ES6
    const swap = (arr,i ,j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    for (let i = start + 1; i < arr.length; i ++) {
        if (pivot > arr[i]) {
            swapIdx ++;
            swap(arr, swapIdx, i)
        } 
    }
    swap(arr, start, swapIdx)
    return swapIdx
}


// Quicksort function

const quicksort = (arr) => {

}