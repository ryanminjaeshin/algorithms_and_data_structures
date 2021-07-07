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

/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let len = height.length;
    let leftHeight = new Array(len)
    let rightHeight = new Array(len)
    let res = 0;
    leftHeight[0] = height[0];
    rightHeight[len - 1] = height[len - 1]
    for (let i = 1; i < len; i ++) {
        leftHeight[i] = Math.max(leftHeight[i-1], height[i]);
    }
    for (let i = len - 2; i >= 0; i --) {
        rightHeight[i] = Math.max(rightHeight[i+1], height[i]);
    }
    for (let i = 1; i < len-1; i ++) {
        res += Math.min(leftHeight[i], rightHeight[i]) - height[i]
    }
    return res;
};

// recap
// recap