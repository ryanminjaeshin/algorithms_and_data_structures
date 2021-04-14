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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function(root, x, y) {

    let queue = [root];
    while(queue.length) {
        let currentSize = queue.length;
            let isX = false;
            let isY = false;
        for (let i = 0; i < currentSize; i ++) {
            let currentNode = queue.shift();
            if (currentNode.left !== null && currentNode.right !== null) {
                 if (currentNode.left.val === x && currentNode.right.val === y) return false;
                 if (currentNode.left.val === y && currentNode.right.val === x) return false;
            }
            
            if (currentNode.val === x) isX = true;
            if (currentNode.val === y) isY = true;
            
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
            if (isX && isY) return true;
        }
    }
    return false;
};