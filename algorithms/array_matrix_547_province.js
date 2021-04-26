var findCircleNum = function(isConnected) {
    let res = 0;
    let visited = new Set();
    const dfs = i => {
        for (let j = 0; j < isConnected.length; j ++) {
            if(isConnected[i][j] == 1 && !visited.has(j)) {
                visited.add(i);
                dfs(j);
            }
        }
    }
    for (let i = 0; i < isConnected.length; i ++) {
            if (!visited.has(i)) {
                dfs(i);
                res ++
            }
        }
    return res;
};