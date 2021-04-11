/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    return helper(0, 0, inorder.length - 1, preorder, inorder)
};

const helper = (preStart, inStart, inEnd, preorder, inorder) => {
    if (preStart > preorder.length - 1 || inStart > inEnd) return null;
    let root = new TreeNode(preorder[preStart]);
    let inIndex = 0;
    for (let i = inStart; i <= inEnd; i ++) {
        if (root.val == inorder[i]) inIndex = i;
    }
    root.left = helper(preStart + 1, inStart, inIndex - 1, preorder, inorder);
    root.right = helper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd, preorder, inorder);
    
    return root;

}