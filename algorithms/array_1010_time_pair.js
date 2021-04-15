/**
 * @param {number[]} time
 * @return {number}
 */
 var numPairsDivisibleBy60 = function(time) {
    let arr = new Array(60).fill(0);
    let res = 0;
    for (let t of time) {
        res += arr[(600 - t) % 60];
        arr[t % 60] += 1
    }
    return res;
};