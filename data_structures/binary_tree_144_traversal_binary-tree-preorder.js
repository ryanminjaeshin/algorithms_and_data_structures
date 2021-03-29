var preorderTraversal = function(root) {
    let result = [];
    const traverse = (node) => {
        if (!node) return;
        result.push(node.val)
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right)
    }
    
    traverse(root)
    
    return result;
};