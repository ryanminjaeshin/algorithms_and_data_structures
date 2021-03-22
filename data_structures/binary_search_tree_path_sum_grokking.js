class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


function hasPath(root, sum) {
    if(!root) false;
    if(root.val === sum && !root.left & !root.right) true;
    return hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val);
}