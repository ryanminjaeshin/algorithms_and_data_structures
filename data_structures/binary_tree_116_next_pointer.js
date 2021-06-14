/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    if (!root) return null;
    let queue = [root];
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i ++) {
            let currentNode = queue.shift();
            currentNode.next = (i===size-1) ? null:queue[0]
            if (currentNode.left) {
                queue.push(currentNode.left);
                queue.push(currentNode.right)
            }         
        }
    }
    return root;
};
// recap