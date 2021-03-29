var postorderTraversal = function(root) {
    let result = [];
    const traverse = (node) => {
        if(!node) return;
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        result.push(node.val);
    }
    traverse(root)
    
    return result;
};