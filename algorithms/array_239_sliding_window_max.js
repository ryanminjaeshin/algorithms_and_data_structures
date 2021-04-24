// monotonic-queue, sliding-window, amazon
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    let res = [];
    let queue = [];
    for (let i = 0; i < nums.length; i ++) {
        while (nums[i] > queue[queue.length - 1]) queue.pop();
        queue.push(nums[i])
        
        if (i >= k - 1) {
            res.push(queue[0]);
            if (nums[i - k + 1] == queue[0]) queue.shift();
        }
    }
    return res;
};