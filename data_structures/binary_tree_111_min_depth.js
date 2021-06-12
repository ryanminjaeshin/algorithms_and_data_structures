var minDepth = function(root) {
    if (!root) return 0;
    let depth = 1,
        queue = [root];
    while (queue.length) {
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i ++) {
            let currentNode = queue.shift();
            if (!currentNode.left && !currentNode.right) return depth
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        depth ++
    }
};
// recap