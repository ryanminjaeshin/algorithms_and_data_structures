var maxDepth = function(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

//recap
var maxDepth = function(root) {
  if(!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

var maxDepth = function(root) {
  if (!root) return 0;

  let nodeStack = [root];
  let depthStack = [1];
  let maxDepth = 0;

  while (nodeStack.length) {
      let currentNode = nodeStack.pop();
      let currentDepth = depthStack.pop();
      maxDepth = Math.max(maxDepth, currentDepth);

      if (currentNode.left) {
          nodeStack.push(currentNode.left);
          depthStack.push(currentDepth + 1)
      }

      if (currentNode.right) {
          nodeStack.push(currentNode.right);
          depthStack.push(currentDepth + 1)
      }
  }

  return maxDepth;
};
