// Time: O(LLd), space: O(Ld)
var minDifficulty = function (A, d) {
    const L = A.length;
    const dp = Array.from(Array(d), () => Array(L));
  
    for (let i = 0; i < d; i++) {
      for (let j = 0; j < L; j++) {
        if (i === 0) dp[i][j] = Math.max(j >= 1 ? dp[i][j - 1] : 0, A[j]); // If only one day
        else if (i > j) dp[i][j] = -1; // If day larger than work, return -1
        else {
          let max = A[j];
          for (let k = 1; k <= j && i - 1 <= j - k; k++) {
            max = Math.max(max, A[j - k + 1]);
            dp[i][j] = Math.min(dp[i][j] || Infinity, dp[i - 1][j - k] + max);
          }
        }
        // dp[i][j] = Math.min(
        //   dp[i - 1][j - 1] + A[j] // Do one job in new day
        //   dp[i - 1][j - 2] + Math.max(A[j], A[j - 1]) // Do two jobs in new day
        //   ...
        //   dp[i - 1][j - k] + Math.max(max, A[j - k + 1])
        //   ...
        //   dp[i - 1][0] + Math.max(A[j], A[j - 1], ..., A[1]) // Leave only one job in previous day
        // );
      }
    }
  
    return dp[d - 1][L - 1];
  };