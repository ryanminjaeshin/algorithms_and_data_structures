/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
 var wallsAndGates = function(rooms) {
    let rows = rooms.length,
        cols = rooms[0].length,
        queue = [],
        //      top    right     down    left
        dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    for (let i = 0; i < rows; i ++) {
        for (let j = 0; j < cols; j ++) {
            if (rooms[i][j] == 0) {
                // save gate position
                queue.push([i, j])
            }
        }
    }
    while (queue.length) {
        let curr = queue.shift(),
            cR = curr[0],
            cC = curr[1];
        for (let dir of dirs) {
            let nR = cR + dir[0],
                nC = cC + dir[1];
            if (nR < 0 || nR > rows - 1 || nC < 0 || nC > cols - 1 || rooms[nR][nC] !== 2147483647) continue;
            rooms[nR][nC] = rooms[cR][cC] + 1;
            queue.push([nR, nC])
        }
    }
};