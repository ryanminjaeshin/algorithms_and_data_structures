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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    let stack = [root];
    let sum = 0;
    while(stack.length !== 0) {
        let currentNode = stack.pop();
        if (currentNode !== null) {
            if (currentNode.val >= low && currentNode.val <= high) {
                sum += currentNode.val;
            }
            // when current value is greater than low, we check the left node since the left node is always smaller than current node
            if (currentNode.val > low) {
                stack.push(currentNode.left);
            }
            if (currentNode.val < high) {
                stack.push(currentNode.right);
            }
        }
    }
    return sum;
};