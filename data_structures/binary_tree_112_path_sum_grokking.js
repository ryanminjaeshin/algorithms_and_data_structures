class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


const hasPathSum = (root, targetSum) => {
    if(!root) return false;
    if(root.val === targetSum && !root.left & !root.right) return true;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}

const hasPathSum = (root, targetSum) => {
  if (!root) return false;
  let rootStack = [root];
  let sumStack = [targetSum - root.val];
  while(rootStack.length > 0) {

      let currentNode = rootStack.pop();
      let currentSum = sumStack.pop();

      if (!currentNode.left && !currentNode.right && currentSum === 0) {
          return true;
      }

      if (currentNode.left) {
          rootStack.push(currentNode.left);
          sumStack.push(currentSum - currentNode.left.val)
      }
      if (currentNode.right) {
          rootStack.push(currentNode.right);
          sumStack.push(currentSum - currentNode.right.val)
      }
  }
  return false;
};

// recap
// recap