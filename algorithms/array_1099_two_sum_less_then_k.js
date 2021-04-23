var twoSumLessThanK = function(nums, k) {
    let res = -1;
    for (i = 0; i < nums.length-1; i++) {
        for (j = i+1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            if (sum > res && sum < k) res = sum;
        }
    }
    return res;
};