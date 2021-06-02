var inorderTraversal = function(root) {
    let result = [];

   const traverse = node => {
     
     if (!node) return;
     
     if (node.left) traverse(node.left)

     result.push(node.val)

     if (node.right) traverse(node.right)

   }

   traverse(root)

   return result
};
// recap