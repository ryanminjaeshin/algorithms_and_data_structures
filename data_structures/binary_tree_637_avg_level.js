var averageOfLevels = function(root) {
    if (!root) return 0;
    let queue = [root],
        res = [];
    while(queue.length) {
        let sum = 0;
        let currentSize = queue.length;
        for (let i = 0; i < currentSize; i ++) {
            let currentNode = queue.shift();
            sum += currentNode.val;
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        res.push(sum / currentSize)
    }
    return res;
};