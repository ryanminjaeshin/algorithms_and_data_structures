// Create helper function

const pivot = (arr, start = 0, end = arr.length) => {
    let pviot = arr[start];
    let swapIdx = start;

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