/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    
    let leftSum = 0;
    let rightSum = nums.reduce((a, b) => a + b) - nums[0];
    for (let i = 0; i < nums.length; i ++) {
        if (leftSum === rightSum) return i;
        leftSum += nums[i];
        rightSum -= nums[i + 1]
    }
    return -1;
};
