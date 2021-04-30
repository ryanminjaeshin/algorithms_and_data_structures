// binary-search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let lo = 0;
    let high = nums.length - 1;
    while (lo < high) {
        let mid = lo + Math.floor((high - lo + 1) / 2);
        if (target < nums[mid]) {
            high = mid - 1
        } else {
            lo = mid;
        }
    }
    return nums[lo] === target ? lo : -1;
};