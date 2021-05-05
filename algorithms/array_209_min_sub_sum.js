// sliding-window, amazon
var minSubArrayLen = function(target, nums) {
    let left = 0,
        res = nums.length + 1,
        sum = 0;
    for (let right = 0; right < nums.length; right ++) {
        sum += nums[right];

        while (sum >= target) {
            res = Math.min(right - left + 1, res)
            sum -= nums[left];
            left ++
        }
    }
    return res == nums.length + 1 ? 0 : res;
}