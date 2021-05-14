/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let res = [];
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let sum = nums[r] + nums[l]
        if (sum == target) {
            return [l + 1, r + 1]
        } else if (sum < target) {
            l ++
        } else {
            r --;
        }
    }
};