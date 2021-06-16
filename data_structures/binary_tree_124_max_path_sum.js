var maxPathSum = function(root) {
    let max = -Infinity;

    const  pathSum = root => {
        if(!root) return 0;
        let left = Math.max(0, pathSum(root.left));
        let right = Math.max(0, pathSum(root.right));
        max = Math.max(left + right + root.val, max);
        return Math.max(left, right) + root.val;
    }
    pathSum(root);
    return max;
};
// recap