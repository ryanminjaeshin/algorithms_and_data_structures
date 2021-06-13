var pathSum = function(root, targetSum) {
    let res = [];
    const helper = (node, targetSum, curr) => {
    if(!node) return;
    targetSum -= node.val;
    curr.push(node.val);
    if(!node.left && !node.right && targetSum === 0) res.push(curr) 
    node.left = helper(node.left, targetSum, [...curr]);
    node.right = helper(node.right, targetSum, [...curr])
}
    helper(root, targetSum, []);
    return res;
};

// recap