// amazon, bfs
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestPathBinaryMatrix = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    if (!grid.length) return -1;
    if (grid[0][0] !== 0) return -1;
    if (grid[rows - 1][cols - 1] !== 0) return -1;
    let queue = [[0,0]];
    let dirs = [[-1, 0], [1, 0], [0, 1], [0, -1], [-1, 1], [-1, -1], [1, 1], [1, -1]]
    let steps = 1;
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i ++) {
            let current = queue.shift();
            let cR = current[0];
            let cC = current[1];
            if (cR == rows -1 && cC == cols - 1) return steps;
            for (let dir of dirs) {
                let nR = cR + dir[0];
                let nC = cC + dir[1];
                if (nR < 0 || nC < 0 || nR > rows - 1 || nC > cols - 1 || grid[nR][nC] !== 0) continue;
                    grid[nR][nC] = 1;
                    queue.push([nR, nC])
  
            }
        }
         steps += 1;
    }
    return -1
};