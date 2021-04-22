var isValidBST = function(root) {
    
    // function inOrder(node) {
    //     if(!node) return [];
    //     return [...inOrder(node.left), node.val, ...inOrder(node.right)]
    // }
    
    let sortedArr = [];
    function inOrder(node) {
        if (!node) return;
        if (node.left) inOrder(node.left);
        sortedArr.push(node.val);
        if (node.right) inOrder(node.right);
    }
    
    inOrder(root);
    
    for(let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i+1] <= sortedArr[i]) return false;
    }
    return true;
};