/** https://leetcode.com/problems/number-of-islands/
 *
    Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

    An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.



    Example 1:

    Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
    ]
    Output: 1
    Example 2:

    Input: grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
    ]
    Output: 3
 */

var numIslands = function(grid) {
    let count = 0;
    for (let row = 0; row < grid.length; row ++) {
        for (let col = 0; col < grid[row].length; col ++) {
            if (grid[row][col] === '1') {
                count ++;
                check(row, col, grid);
            }
        }
    }
    return count;
};

const check = (row, col, grid) => {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === '0') return;
    grid[row][col] = '0';
    check(row, col + 1, grid);
    check(row, col - 1, grid);
    check(row + 1, col, grid);
    check(row - 1, col, grid);
}

// recap

var numIslands = function(grid) {
    let count = 0;
    for (let row = 0; row < grid.length; row ++) {
        for (let col = 0; col < grid[row].length; col ++) {
            if(grid[row][col] == 1) {
                count ++;
                check(grid, row, col)
            }
        }
    }
    function check (grid, r, c) {
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[r].length || grid[r][c] == 0) return;
        grid[r][c] = 0;
        check(grid, r - 1, c);
        check(grid, r , c - 1);
        check(grid, r + 1, c);
        check(grid, r, c + 1)
    }

    return count;
};

// recap