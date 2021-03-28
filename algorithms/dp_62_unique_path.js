var uniquePaths = function(m, n) {
  if (m === 1 || n === 1) return 1;
  let dp = new Array(m).fill().map(x => new Array(n));
  for (let i = 0; i < m; i ++) {
      dp[i][0] = 1
  }
  for (let i = 0; i < n; i ++) {
      dp[0][i] = 1
  }
  for (let i = 1; i < m; i ++) {
      for (let j = 1; j < n; j ++) {
          dp[i][j] = dp[i][j-1] + dp[i-1][j]
      }
  }
  return dp[m-1][n-1]
};