// https://leetcode.com/problems/sort-an-array/discuss/849077/912.-Sort-an-Array-(Sorting-Algorithms)

const selectionSort = (arr) => {

    for (let i = 0; i < arr.length - 1; i ++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j ++) {
            if(arr[j] < arr[minIndex]) minIndex = j;
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr;
}

// t -> O(n * n)