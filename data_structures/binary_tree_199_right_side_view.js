var rightSideView = function(root) {
    if (!root) return [];
    let queue = [root];
    let res = [];
    while (queue.length) {
        let size = queue.length;
        let currentLevel = [];
        for (let i = 0; i < size; i ++) {
            let currentNode = queue.shift();
            currentLevel.push(currentNode.val);
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }
        res.push(currentLevel.pop())
    }
    return res;
};