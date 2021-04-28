/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumProduct = function(nums) {
    nums.sort((a,b) => a - b);
    let len = nums.length;
    let max1 = nums[0] * nums[1] * nums[len-1];
    let max2 = nums[len-1] * nums[len-2] * nums[len-3];
    return Math.max(max1, max2)
};