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
 var levelOrderBottom = function(root) {
    if (!root) return [];
    let queue = [root],
        res = [];
    while (queue.length) {
        let currentLevel = [];
        let currentSize = queue.length;
        for (let i = 0; i < currentSize; i ++) {
            let currentNode = queue.shift();
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
            currentLevel.push(currentNode.val);
        }
        res.unshift(currentLevel)
    }
    return res;
};
// recap