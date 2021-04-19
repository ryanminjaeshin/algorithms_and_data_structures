/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
 var postorder = function(root) {
    let res = [];
    const traverse = node => {
        if (!node) return;
        if (node.children) {
            let len = node.children.length;
            for (let i = 0; i < len; i ++) {
                traverse(node.children[i])
            }
        }
        res.push(node.val);
    }
    traverse(root)
    return res;
};