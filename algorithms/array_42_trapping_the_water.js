/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let res = 0;
    let len = height.length;
    let maxLeft = new Array(len);
    let maxRight = new Array(len);
    
    maxLeft[0] = height[0];
    maxRight[len - 1] = height[len - 1];
    
    for (let i = 1; i < len; i ++) {
        maxLeft[i] = Math.max(height[i], maxLeft[i - 1]);
    }
    for (let i = len - 2; i >= 0; i --) {
        maxRight[i] = Math.max(height[i], maxRight[i + 1]);
    }
    for (let i = 1; i < len - 1; i ++) {
        res += Math.min(maxLeft[i], maxRight[i]) - height[i];
    }
    return res;
};