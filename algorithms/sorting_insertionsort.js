// https://leetcode.com/problems/sort-an-array/discuss/849077/912.-Sort-an-Array-(Sorting-Algorithms)

const insertionSort = (arr) => {

    for (let i = 1; i < arr.length; i ++) {
        for (let j = i; j > 0; j --) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
             } else {
                 break;
             }
        }
    }
    return arr;
}
// t -> O(n * n)