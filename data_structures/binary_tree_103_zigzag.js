/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    let j = 1;
    while(queue.length) {
        let levelSize = queue.length;
        let currentLevel = [];
        for (let i = 0; i < levelSize; i ++) {
            let current = queue.shift();
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
            if (j % 2 === 1) {
                currentLevel.push(current.val)   
            } else {
                currentLevel.unshift(current.val)
            }
        }
        j ++;
        res.push(currentLevel);
    }
    
    return res;
};