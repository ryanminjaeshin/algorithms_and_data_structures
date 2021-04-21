/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    let res = 0;
    let fresh = 0;
    let queue = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j ++) {
            if (grid[i][j] == 1) fresh ++;
            if (grid[i][j] == 2) queue.push([i, j]);
        }
    }
    while(queue.length  && fresh) {
        let dR = [-1, 0, 1, 0];
        let dC = [0, -1, 0, 1];
        let next = [];
        while (queue.length) {
            let current = queue.shift();
            for (let i = 0; i < dR.length; i ++) {
                let nR = current[0] + dR[i];
                let nC = current[1] + dC[i];
                if (nR >= 0 && nR < grid.length && nC >= 0 && nC < grid[0].length) {
                    if (grid[nR][nC] == 1) {
                        grid[nR][nC] = 2; // rotten
                        fresh --;
                        next.push([nR, nC])
                    }
                }
            }
        }
        res ++;
        queue = next;
    }
    return fresh == 0 ? res : -1;
};