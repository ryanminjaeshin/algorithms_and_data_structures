
var maxAreaOfIsland = function(grid) {
    let max = 0;
    for (let i = 0; i < grid.length; i ++) {
        for (let j = 0; j < grid[0].length; j ++) {
            if (grid[i][j] === 1) {
                let area = dfs(grid, i, j);
                max = Math.max(max, area)
            }
        }
    }
    return max;
};

const dfs = (grid, r, c) => {
    let area = 0;
    if(r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] === 0) return 0;
    grid[r][c] = 0;
    area = 1 + dfs(grid, r-1, c) + dfs(grid, r+1, c) + dfs(grid, r, c-1) + dfs(grid, r, c+1);
    return area
}
// recap